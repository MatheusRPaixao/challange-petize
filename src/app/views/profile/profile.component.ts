import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {GitRepos, GitUser} from '../../interfaces/git-hub';
import {GitHubService} from '../../services/git-hub.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  repositories: Array<GitRepos> = [];
  username = '';
  user: GitUser;

  constructor(
    private gitHubService: GitHubService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.username = params.username;

      this.gitHubService.getGitUser(this.username).subscribe(response => {
        this.user = response;
        console.log(response);
      });

      this.gitHubService.getGitRepos(this.username).subscribe(response => {
         this.repositories = response;
       });


    });
  }

}

import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {GitRepos, GitUser} from '../../interfaces/git-hub';
import {GitHubService} from '../../services/git-hub.service';
import {forkJoin} from 'rxjs';

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
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.username = params.username;

      if (!this.username) {
        this.router.navigate(['/home']).then();
      }

      forkJoin([
        this.gitHubService.getGitUser(this.username),
        this.gitHubService.getGitRepos(this.username)
      ]).subscribe(response => {
        this.user = response[0];
        this.repositories = response[1];

        this.repositories.sort((first, second) => (first.stargazers_count > second.stargazers_count) ? -1 : 1);
      });
    });
  }
}

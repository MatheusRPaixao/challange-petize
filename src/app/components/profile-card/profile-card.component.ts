import {Component, Input, OnInit} from '@angular/core';
import {GitUser} from '../../interfaces/git-hub';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss']
})
export class ProfileCardComponent implements OnInit {
  @Input() user: GitUser;

  constructor() { }

  ngOnInit(): void {
  }

  getTwitterUrl(): string {
    return `https://twitter.com/${this.user.twitter_username}`;
  }
}

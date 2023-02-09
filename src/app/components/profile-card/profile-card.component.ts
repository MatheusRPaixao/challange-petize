import {Component, Input} from '@angular/core';
import {GitUser} from '../../interfaces/git-hub';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss']
})
export class ProfileCardComponent {
  @Input() user: GitUser;

  getTwitterUrl(): string {
    return `https://twitter.com/${this.user.twitter_username}`;
  }
}

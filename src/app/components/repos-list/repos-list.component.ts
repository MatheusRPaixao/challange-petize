import {Component, Input} from '@angular/core';
import {GitRepos} from '../../interfaces/git-hub';

@Component({
  selector: 'app-repos-list',
  templateUrl: './repos-list.component.html',
  styleUrls: ['./repos-list.component.scss']
})
export class ReposListComponent {
  @Input() repositories: Array<GitRepos>;
}

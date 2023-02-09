import {Component, Input, OnInit} from '@angular/core';
import {GitRepos} from '../../../interfaces/git-hub';

@Component({
  selector: 'app-repos-item',
  templateUrl: './repos-item.component.html',
  styleUrls: ['./repos-item.component.scss']
})
export class ReposItemComponent implements OnInit {
  @Input() repository: GitRepos;
  lastUpdate = '';

  constructor() { }

  ngOnInit(): void {
  }

  getLastUpdateAt(): string {
    if (!this.lastUpdate) {
      const today = new Date();
      const lastUpdate = new Date(this.repository.updated_at);
      const difference = today.getDate() - lastUpdate.getDate();

      if (difference) {
        this.lastUpdate = `há ${difference} dias.`;
      } else {
        this.lastUpdate = 'hoje.';
      }
    }
    return this.lastUpdate;
  }

  getGitRepos(): string {
    if (this.repository.git_url.startsWith('git://')) {
      this.repository.git_url = `https://${this.repository.git_url.split('//')[1]}`;
    }
    return this.repository.git_url;
  }
}

import {Component} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {GitHubService} from '../../services/git-hub.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  searchControl: FormControl;

  isLoading = false;
  showError = false;

  constructor(
    private githubService: GitHubService,
    private router: Router
  ) {
    this.searchControl = new FormControl('', [Validators.required]);
  }

  onSubmit(): void {
    if (this.isLoading) {
      return;
    }
    this.isLoading = true;

    this.githubService.getGitUser(this.searchControl.value).subscribe(user => {
      this.router.navigate([`/perfil/${this.searchControl.value}`]).then();
    }, error => {
      console.error(error);
      this.searchControl.setErrors({ notFound: true });
    }).add(() => {
      this.isLoading = false;
    });
  }
}

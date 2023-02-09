import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {GitRepos, GitUser} from '../interfaces/git-hub';

@Injectable({
  providedIn: 'root'
})
export class GitHubService {
  private baseUrl = 'https://api.github.com/users';

  constructor(
    private http: HttpClient,
  ) { }

  public getGitUser(username: string): Observable<GitUser> {
    const url = `${this.baseUrl}/${username}`;
    return this.http.get(url) as Observable<GitUser>;
  }

  public getGitRepos(username: string): Observable<GitRepos> {
    const url = `${this.baseUrl}/${username}/repos`;
    return this.http.get(url) as Observable<GitRepos>;
  }
}

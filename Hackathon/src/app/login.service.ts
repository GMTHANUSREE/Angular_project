import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginViewModel } from './login-view-model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService
{
  urlPrefix: string = "http://localhost:9090"; 
  constructor(private httpClient: HttpClient) /*Communicating with backend services using HTTP */
  {
  }

  currentUserName: any = null;

  public Login(loginViewModel: LoginViewModel): Observable<any> /*invoked when click on the login button */
  {
    return this.httpClient.post<any>(this.urlPrefix + "/authenticate", loginViewModel, { responseType: "json" })
      .pipe(map(user =>
      {
        if (user) /* if user is not equal to null assing user name to current user name */
        {
          this.currentUserName = user.userName;
          sessionStorage['currentUser'] = JSON.stringify(user);
        }
        return user;
      }));
  }

  public Logout() /* when logged out user name is set to null */
  {
    sessionStorage.removeItem("currentUser");
    this.currentUserName = null;
  }
}
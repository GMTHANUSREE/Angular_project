import { Component, OnInit } from '@angular/core';
import { LoginViewModel } from '../login-view-model';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit
{
  loginViewModel: LoginViewModel = new LoginViewModel();
  loginError: string = ""; /* to display error this property is created */

  constructor(private loginService: LoginService, private router: Router) 
  {
  }

  ngOnInit()
  {
  }

  onLoginClick(event: any)
  {
    this.loginService.Login(this.loginViewModel).subscribe((response) =>
      {
        this.router.navigateByUrl("/dashboard"); /* if login successful then redirect to dashboard page */  
      },
      (error) => 
      {
        console.log(error); /* logout unsuccessful error msg will be displayed */
        this.loginError = "Invalid Username or Password";
      },
    );
  }

}
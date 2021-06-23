import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authenticationService:AuthenticationService,
    public router: Router) { }

  ngOnInit(): void {
  }
  @Input() userObj = { username: '', password: ''}

  verifyLoginUser(){
    this.authenticationService.loginUser(this.userObj).subscribe(data =>{
      this.router.navigate(['/dashboard'])
    });
  }

}

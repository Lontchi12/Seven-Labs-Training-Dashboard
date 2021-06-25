import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;  
    submitted = false;  
    returnUrl: string;  
    error: string;

  constructor(private authenticationService:AuthenticationService,
    private formBuilder: FormBuilder,
    public router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({ 
      username: ['bhaidar', Validators.required],
      password: ['@dF%^hGb03W~', Validators.required]
  });
  
  }

  get f() { 
    return this.loginForm.controls; 
}


  @Input() userObj = { username: '', password: ''}

  verifyLoginUser(){
    this.authenticationService.loginUser(this.userObj).subscribe(data =>{
      const { accessToken } = data;
      this.set('token',accessToken)
      this.authenticationService.authenticated = true
      this.router.navigate(['/dashboard'])
    });
  }

  set(key: string, value: string) {
    localStorage.setItem(key, value)
  }
  get(key: string) {
    return localStorage.getItem(key);
  }
  remove(key: string) {
    localStorage.removeItem(key)
  }

}

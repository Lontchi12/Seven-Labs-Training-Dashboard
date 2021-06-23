import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private authenticationService:AuthenticationService,
    public router: Router) { }

  ngOnInit(): void {
  }

  @Input() userObj = { username: '', password: ''}

  addUser(){
    this.authenticationService.createUser(this.userObj).subscribe(data =>{
      this.router.navigate(['/login'])
    });
  }

}

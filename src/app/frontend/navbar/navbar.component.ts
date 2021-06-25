import { LocalStorageService } from './../local-storage.service';
import { AuthenticationService } from './../services/authentication.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Emitters } from '../emitters/emitters';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router, private http: HttpClient, private authenticationService: AuthenticationService,
    private localStorageService: LocalStorageService ) { }
  
  message = ''

  authenticated = this.authenticationService.authenticated
  API_SERVER = "http://localhost:3000";

  ngOnInit(): void {
    // Emitters.authEmitter.subscribe(
    //   (auth: boolean) => {
        
    //     this.authenticated = this.authenticationService.authenticated
    //   }
    // )

    // const token = this.localStorageService.getItem('token');
    // var headers_object = new HttpHeaders({
    //   'Content-Type': 'application/json',
    //    'Authorization': "Bearer "+ token,
    // });

    //     const httpOptions = {
    //       headers: headers_object
    //     };

    //   this.http.get(`${this.API_SERVER}/auth/user`, httpOptions).subscribe(
    //   (res: any) => {
    //     console.log(res);
    //     this.message = `Hello ${res.name}!`
    //     this.authenticated = true;
    //   },
    //   err => {
    //     console.log(err);
    //     this.message = 'You are not logged in';
    //     this.authenticated = false;
    //   }
    // )
  }
  

}

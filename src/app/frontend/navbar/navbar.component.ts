import { LocalStorageService } from '../services/local-storage.service';
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


  ngOnInit(): void {
   
    
  }
  

}

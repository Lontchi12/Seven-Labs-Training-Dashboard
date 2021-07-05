import { Auth } from './../../frontend/models/Auth';
import { LocalStorageService } from './../../frontend/local-storage.service';
import { AuthenticationService } from './../../frontend/services/authentication.service';
import { ActivatedRoute, Router } from '@angular/router';
import {Component} from '@angular/core';
import { navItems } from '../../_nav';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Emitters } from '../../frontend/emitters/emitters';


@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent {
 
  user: Auth
  
  

  constructor (private router: Router, private http: HttpClient, 
    private authenticationService: AuthenticationService,
    private localStorageService: LocalStorageService ,
    private route: ActivatedRoute,   ) {

      
    }

  message = '' 

  //authenticated = this.loginService.authenticated;
  authenticated = this.authenticationService.authenticated

  API_SERVER = "http://localhost:3000";

  ngOnInit(): void {
    


    this.user = this.authenticationService.getAuthUser();
    Emitters.authEmitter.subscribe(
      (auth: boolean) => {
        this.authenticated = this.authenticationService.authenticated 
      } 
    )
   
    const token = this.localStorageService.getItem('token');
    const headers_object = new HttpHeaders({
      'Content-Type': 'application/json',
       'Authorization': "Bearer "+ token,
    });

    const httpOptions = {
      headers: headers_object
    };
    
    this.http.get(`${this.API_SERVER}/auth/user`,httpOptions ).subscribe(  
      (res: any) => {
        console.log(res);
        this.message = `Hello ${res.username}!`
        this.authenticated = true;
      },
      err => {
        console.log(err);
        this.message = 'You are not logged in';
        this.authenticated = false;
        this.router.navigate(['/login'])
      }
    )
  }

  // getLab(): void {
  //   const _id =  this.route.snapshot.paramMap.get('id');
  //   console.log(_id)
  //   this.labsService.getLab(_id)
  //   .subscribe( lab => this.lab = lab)

  // }

  // getAll(): void {
  //   const _id = this.route.snapshot.paramMap.get('id');
  //   this.authenticationService.getById(_id).subscribe(user => this.user = user)
  // }

  logout(){
    this.localStorageService.removeItem('token');
    this.authenticated = false;
    //this.router.onSameUrlNavigation = 'reload';
    //window.location.reload();
    this.router.navigate(['/login']);
  }
  

  

  public sidebarMinimized = false;
  public navItems = navItems;

  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }
}

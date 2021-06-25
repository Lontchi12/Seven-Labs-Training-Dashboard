import { LocalStorageService } from './../local-storage.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { Emitters } from '../emitters/emitters';
// import { LocalStorageService } from '../local-storage.service';



@Injectable({
  providedIn: 'root'
})
export class LabGuardGuard implements CanActivate {

  constructor(private http: HttpClient, private router: Router, private localStorage: LocalStorageService, private authenticationService: AuthenticationService ) { }

  message = ''
  authenticated = this.authenticationService.authenticated

  ngOnInit(): void {
    Emitters.authEmitter.subscribe(
      (auth: boolean) => {
        this.authenticated = auth
      }
    )

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    //return true;
    if(!this.authenticated) {
      this.router.navigate(['/login']);
      return false
    }
    this.authenticated = true;
    return true

    


  }
  
}

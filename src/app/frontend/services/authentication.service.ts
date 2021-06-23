import { Injectable } from '@angular/core';
import {Auth} from '../models/Auth';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
//import { environment } from 'src/environments/environment';
import { Observable, throwError } from 'rxjs';
//import { catchError, retry } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type':'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  // private baseURL = environment.
  API_SERVER = "http://localhost:3000";

// register user

  public createUser(auth: Auth): Observable<Auth> {
    let request = this.httpClient.post<Auth>(`${this.API_SERVER}/auth/signup`, auth,httpOptions);
   
    return request;
  }

  //login user

  public loginUser(auth: Auth): Observable<Auth> {
    let request = this.httpClient.post<Auth>(`${this.API_SERVER}/auth/login`, auth,httpOptions);
  

    return request;
  }


  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
  
  
  constructor(private httpClient: HttpClient) { }
}

import { Injectable } from '@angular/core';
import { Auth } from '../models/Auth';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
//import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
//import { catchError, retry } from 'rxjs/operators';
import { LocalStorageService } from './local-storage.service';
import { Role } from '../models/Role';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type':'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  authenticated = false;

  // private baseURL = environment.
  API_SERVER = "http://localhost:3000";

  private userSubject: BehaviorSubject<Auth>;
  public user: Observable<Auth>;

  constructor(private httpClient: HttpClient) {
    this.userSubject = new BehaviorSubject<Auth>(JSON.parse(JSON.stringify(
      localStorage.getItem('user'))));
    this.user = this.userSubject.asObservable();
   }

   public get userValue(): Auth {
    return this.userSubject.value;
}

getAll() {
  return this.httpClient.get<Auth[]>(`${this.API_SERVER}/auth/users`);
}

getById(id: string): Observable<any> {
  return this.httpClient.get<Auth>(`${this.API_SERVER}/auth/user/${id}`);
}

// getLab(id: string): Observable<any> {
//   const url = `${this.baseURL}/api/lab/${id}`;
//   return this.http.get<Labs>(url);
// }

getAuthUser(): Auth|any{
  return this.get('user');
}

setUserRole(role): Auth|any{
  return this.set('user_role', role);
}

getUserRole(): string{
  return this.get('user_role');
}

setAuthUser(user): Auth|any{
  return this.set('user', user);
}


// register user

  public createUser(auth: Auth): Observable<Auth> {
    let request = this.httpClient.post<Auth>(`${this.API_SERVER}/auth/signup`, auth,httpOptions);
   
    return request;
  }

  //login user

  public loginUser(auth: Auth): Observable<any> {
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

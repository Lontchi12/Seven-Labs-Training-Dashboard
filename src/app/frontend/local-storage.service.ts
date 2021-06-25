import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  public setItem(key: string, value: string) {
    localStorage.setItem(key, value);
  }
    
  public getItem(key: string){ 
    return localStorage.getItem(key)
  }  
  public removeItem(key:string) {
    localStorage.removeItem(key);
  }  
  
  public clear(){
    localStorage.clear(); 
  }

//   isAuthenticated() {
//     // get the auth token from localStorage
//     let token = localStorage.getItem('token');

//     // check if token is set, then...
//     if (token) {
//         return true;
//     }

//     return false;
// }

}

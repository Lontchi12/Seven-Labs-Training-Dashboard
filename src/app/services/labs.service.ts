import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Labs } from '../models/Labs';
import { environment } from '../../environments/environment';
import { Observable, of } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class LabsService {

  
  private baseURL = environment.baseURL

  constructor(private http: HttpClient) { }

  
  /** GET All Labs */
  getLabs(): Observable<Labs[]> {
    const result = this.http.get<Labs[]>(this.baseURL + '/api/labs');
    console.log(result)
    return result;
  }
  


  /** GET Labs by id  */
  getLab(id: string): Observable<any> {
    const url = `${this.baseURL}/api/lab/${id}`;
    return this.http.get<Labs>(url);
  }


  /** POST: Add a Lab to the server */
  addLab(lab: Labs) {
    console.log(lab)
    return this.http.post(this.baseURL + '/api/addlab', lab , httpOptions);
  }


  /** PUT: Update a Lab on the server */
  updateLab(lab: Labs): Observable<any> {
    // const id = typeof lab === 'string' ? lab: lab._id
    return this.http.put(this.baseURL + `/api/update/${lab._id}`, lab, httpOptions)
  }


  /** DELETE: delete Lab from the server */
  deleteLab(lab: Labs | number) {
    if (confirm("Are you sure to Delete?")) {
      const id = typeof lab === 'number' ? lab: lab._id;
      const url = `${this.baseURL}/api/delete/${id}`;
      return this.http.delete(url, httpOptions);
    }
    return of({});
  }



}

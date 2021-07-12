import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Projects } from '../models/Projects';
// import { environment } from '../../environments/environment';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment.prod';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private baseURL = environment.baseURL

  constructor(private http: HttpClient, private router: Router) { }

  

  /** GET All Projects */
  getProjects(): Observable<Projects[]> {
    const result = this.http.get<Projects[]>(this.baseURL + '/projects');
    return result
  }

    /** GET All Projects */
    getProjectsPerLab(id: string): Observable<Projects[]> {
      const result = this.http.get<Projects[]>(this.baseURL + `/lab/${id}/projects`);
      return result
    }
  
  
  /** GET Project by id */
  getProject(id: string): Observable<any> {
    const url = `${this.baseURL}/projects/project/${id}`
    return this.http.get<Projects>(url)
  }


  /** POST: Add a Project to the server */
  addProject(project: Projects) {
    return this.http.post(this.baseURL + '/projects/addProject', project, httpOptions); 
  }


  /** PUT: Update a Project on the server */
  updateProject(project: Projects): Observable<any> {
    const id = typeof project === 'string' ? project: project._id
    return this.http.put(this.baseURL + `/projects/update/${project._id}`, project , httpOptions)
  }


  /** DELETE: delete a project from the server */
  deleteProject(project: Projects | number) {
    if(confirm("Are you sure to Delete?")) {
      const id = typeof project === 'number' ? project: project._id;
      const url = `${this.baseURL}/projects/delete/${id}`;
      return this.http.delete(url, httpOptions)
    }
    return of({});
  }


}

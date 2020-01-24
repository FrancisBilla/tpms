import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProjectInterface } from './screens/project-interface';

@Injectable({
  providedIn: 'root'
})

export class ProjectService {
  private projectUrl = 'https://employee.services.turntabl.io';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {}
  //  adding project to db
  addNewProject(requestBody: any): Observable<any> {
    let body = JSON.stringify(requestBody);
    let headers = new HttpHeaders({'Content-Type':'application/json'});
   
    return this.http.post<any>(
      this.projectUrl + '/v1/api/project',body,{headers: headers} );
  }

  
  assignProjectToEmployee(project_id,employee_id): Observable<any> {
    return this.http.get<any>(
      this.projectUrl + '/v1/api/project/'+project_id+'/assign/employee/' + employee_id
    );
  }

  getProject(): Observable<any> {
    return this.http.get<any>(this.projectUrl + '/v1/api/projects');
  }

  getAssignedProject(employee_id: string): Observable<any> {
    return this.http.get<any>(
      this.projectUrl + '/v1/api/projects/assigned/employee/' + employee_id
    );
  }


  assignProjecttoDev(project_id: number, body:number): Observable<ProjectInterface[]> {
      return this.http.post<ProjectInterface[]>(this.projectUrl + "/projects/assign/"+ project_id,body);
  }

  removeProjectFromEmployee( project_id,employee_id):Observable<any>{
    return this.http.get<any>(
      this.projectUrl + '/v1/api/project/' + project_id + '/remove/employee/'+ employee_id
    );

  }
 

}

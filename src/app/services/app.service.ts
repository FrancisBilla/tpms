import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Employee } from "../employee";
import ProjectModel from "../models/ProjectModel";
@Injectable({
  providedIn: "root"
})
export class AppService {
  private messageSource = new BehaviorSubject("");
  currentMessage = this.messageSource.asObservable();
  private developerService = "https://employee.services.turntabl.io";
  private projectServiceUrl = "https://project.services.turntabl.io";
  constructor(private http: HttpClient) {}

  changeMessage(message: string) {
    this.messageSource.next(message);
  }
  getEmployeeRole(email: string): Observable<any> {
    return this.http.get<any>(
      this.developerService + "/v1/api/login/" + email
    );
  }

  getEmployeepProjects(employee_id): Observable<any> {
    return this.http.get<any>(
      this.projectServiceUrl + "/v1/api/projects/assigned/employee/" + employee_id
    );
  }

  addEmployee(requestBody: any): Observable<any> {
    let body = JSON.stringify(requestBody);
    let headers = new HttpHeaders({'Content-Type':'application/json'});
   
    return this.http.post<any>(
      this.developerService + '/v1/api/employee',body,{headers: headers} );
  }
  getLoggedHours(): Observable<ProjectModel[]> {
    return this.http.get<ProjectModel[]>(this.developerService + "log");
  }
  getLoggedHoursForDev(empId: string): Observable<ProjectModel[]> {
    return this.http.get<ProjectModel[]>(
      this.developerService + "projectlogged/dev/" + empId
    );
  }
  getDevelopers(): Observable<any> {
    return this.http.get<any>(this.developerService + "/v1/api/employees");
  }
}

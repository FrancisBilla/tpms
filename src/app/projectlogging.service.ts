import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Projectlogging } from './projectlogging';
import { Observable, of } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ProjectloggingService {
  private projectsUrl = 'https://project.services.turntabl.io';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor( private http: HttpClient) { }

  // getaddhours (): Observable<Projectlogging[]> {
  //   return this.http.get<Projectlogging[]>(this.projectsUrl)
  //   }
  // loghours(data: Projectlogging):Observable<Projectlogging>{
  //   return this.http.post<Projectlogging>(this.projectsUrl, data);
  // }
  logproject(data: any):Observable<any>{
    let body = JSON.stringify(data);
    let headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.http.post<any>(this.projectsUrl + '/v1/api/logproject', body,{headers: headers});
  }
  logsick(data: any):Observable<any>{
    let body = JSON.stringify(data);
    let headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.http.post<any>(this.projectsUrl + '/v1/api/logsick', body,{headers: headers});
  }
  logvacation(data: any):Observable<any>{
    let body = JSON.stringify(data);
    let headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.http.post<any>(this.projectsUrl + '/v1/api/logvacation', body,{headers: headers});
  }
  getLoggedHours(): Observable<any[]> {
    return this.http.get<any[]>(this.projectsUrl + '/v1/api/getloggedhours');
  }


}

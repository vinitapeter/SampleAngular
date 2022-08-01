import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubmitServiceService {

  constructor(private http: HttpClient) { }

  login(username:any, password:any): Observable<any> {
 
    console.log(username);
    console.log(password);
    const postLoginUrl = 'https://dhlappgw.southeastasia.cloudapp.azure.com/' + 'login?username=' + username + '&&password=' + password;
    //const postLoginUrl = 'http://localhost:8080/' + 'login?username=' + username + '&&password=' + password;
    const res =  this.http.post(postLoginUrl, {});
    
    console.log(res)
    return res;
      
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  verifyEmailReq(data: any){
    let url = `https://messwala.tech/login-req`;
    return this.http.post(url, data);
  }

  verifyUser(data: any){
    let url = `https://messwala.tech/login`;
    return this.http.post(url, data);
  }

}

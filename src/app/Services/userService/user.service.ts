import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';
import {HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private httpService:HttpService) { }

  regiser(reqdata:any){
  
    let header ={
      headers: new HttpHeaders({
        'Content-type': 'application/json'
       
      })
    }
    return this.httpService.postService('user/userSignUp',reqdata,false,header)
  }

  login(reqdata:any){
  
    let header ={
      headers: new HttpHeaders({
        'Content-type': 'application/json'
       
      })
    }
    return this.httpService.postService('user/login',reqdata,false,header)
  }

  forgot(reqdata:any){
  
    let header ={
      headers: new HttpHeaders({
        'Content-type': 'application/json'
       
      })
    }
    return this.httpService.postService('user/reset',reqdata,false,header)
  }



}


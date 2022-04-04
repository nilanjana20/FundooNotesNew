import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class HttpService {
  BaseUrl=environment.baseUrl;
  constructor(private http: HttpClient) { }

  postService(url:string, reqPayload:any={},token:boolean=false,option:any){

    return this.http.post(this.BaseUrl+url,reqPayload, token && option)

  }

  getService(url:string, token:boolean=false,option:any){

    return this.http.get(this.BaseUrl+url, token && option)

  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SendDataService {

  constructor(
    private http: HttpClient,
  ) { }

  send(data:any, url:string){
    return console.log(data);
    //return this.http.post(url, data);
  }

}

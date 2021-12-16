import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SendMailService {

  constructor( 
    private http: HttpClient, 
  ) { }

  send( data:any ){
    const url: string = 'http://localhost:5001/missromy-fcccb/us-central1/app/contacto'
    return this.http.post(url, data)
  }
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Message } from './message';


@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private API = 'http://localhost:8080/messages'


  constructor(public http: HttpClient) { }

  list(): Observable<Message[]> {
    console.log(JSON.stringify(this.http.get<Message[]>(this.API)))
    return this.http.get<Message[]>(this.API)
  }

  create(message: Message): Observable<Message> {
    alert("Message sent!")
    return this.http.post<Message>(this.API, message)
  }

}


import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Person} from "./model/person";

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  url = "/api"

  constructor(private http: HttpClient) { }

   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
    })
  };

  addPerson(person : Person) {
    return this.http.post<Person>(this.url + "/messages", person, this.httpOptions).subscribe(

    );
  }

  getTestMessage() {
    return this.http.get(this.url + "/test");
  }


}

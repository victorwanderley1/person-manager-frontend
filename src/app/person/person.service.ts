import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Person } from "./person";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class PersonService{
    private apiUrl: string = 'http://localhost:8080/api/v1/person';
    constructor(private httpClient: HttpClient){ }
    findAll(): Observable<Person[]>{
        return this.httpClient.get<Person[]>(this.apiUrl);
    }
}

var PERSONS: Person[] = [
    {
        id: 'abc',
        name: 'xablau',
        email: 'xablau@gmail.com',
        phone: '868686868'
    },
    {
        id: 'def',
        name: 'xeresvaldo',
        email: 'xeresvaldo@gmail.com',
        phone: '0008880'
    }
]
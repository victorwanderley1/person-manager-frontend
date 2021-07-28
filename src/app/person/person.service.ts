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
        return this.httpClient.get<Person[]>(this.apiUrl, {responseType: "json"});
    }
    findById(id: string): Observable<Person>{
        return this.httpClient.get<Person>(`${this.apiUrl}/${id}`);
    }
    
    save(person: Person): Observable<Person>{
        if(person.id){
            return this.httpClient.put<Person>(this.apiUrl, person);
        }else{
            return this.httpClient.post<Person>(this.apiUrl, person);
        }
    }
    deleteById(id:string): Observable<any>{
        return this.httpClient.delete<any>(`${this.apiUrl}/${id}`);
    }
}
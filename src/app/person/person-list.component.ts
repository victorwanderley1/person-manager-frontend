import { Component, OnInit } from "@angular/core";
import { Person } from "./person";
import { PersonService } from "./person.service";

@Component({
    templateUrl: './person-list.component.html'
})
export class PersonListComponent implements OnInit{
    _persons: Person[] = [];
    filtredPersons: Person[] = [];
    _filterBy!: string;


    constructor(private service: PersonService){}
    ngOnInit(): void {
        this.findAll();
    }

    findAll(): void{
        this.service.findAll().subscribe({
            next: person => {
                this._persons = person;
                this.filtredPersons = this._persons;
            },
            error: err => console.log('Error', err)
        });
    }

    set filter(value: string){
        this._filterBy = value;
        this.filtredPersons = this._persons.filter((person: Person) => person.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1);
    }

    get filter(){
        return this._filterBy;
    }

}
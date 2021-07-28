import { Component, OnInit } from "@angular/core";
import { Person } from "./person";
import { PersonService } from "./person.service";

@Component({
    templateUrl: './person-list.component.html'
})
export class PersonListComponent implements OnInit {
    _persons: Person[] = [];
    filtredPersons: Person[] = [];
    _filterBy!: string;


    constructor(private service: PersonService) { }
    ngOnInit(): void {
        this.findAll();
    }

    findAll(): void {
        this.service.findAll().subscribe({
            next: person => {
                this._persons = person;
        this.filtredPersons = this._persons;
            }, 
            error: err => console.log('Error', err)
        });
        // this._persons = PERSONS;
        // this.filtredPersons = this._persons;
    }

    deleteById(id: string): void { 
        this.service.deleteById(id).subscribe({
            next: () => { 
                console.log('Deleted with success');
                this.findAll();
            },
            error: err => console.log('Error', err)
        })
    }

    set filter(value: string) {
        this._filterBy = value;
        this.filtredPersons = this._persons.filter((person: Person) => person.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1);
    }

    get filter() {
        return this._filterBy;
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
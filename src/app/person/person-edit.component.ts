import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Person } from "./person";
import { PersonService } from "./person.service";

@Component({
    templateUrl: 'person-edit.component.html'
})
export class PersonEditComponent implements OnInit{
    person!: Person;
    personToSave?: Person;

    constructor(private router: ActivatedRoute, private service: PersonService){ }

    ngOnInit(): void {
        this.service.findById(this.router.snapshot.paramMap.get('id')!).subscribe({
            next: person => this.person = person,
            error: e => console.log('Erro: ', e)
        });
    }
    save(): void{
        this.service.save(this.person).subscribe({
            next: person => console.log('Saved with sucess: ', person),
            error: e => console.log('Error: ', e)
        })
    }
}
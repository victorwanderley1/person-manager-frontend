import { Component, SystemJsNgModuleLoader} from "@angular/core";
import { Person } from "./person";
import { PersonService } from "./person.service";

@Component({
    templateUrl: 'person-add.component.html'
})
export class PersonAddComponent{
    person: Person = new Person;

    constructor(private service: PersonService){ }

    
    save(): void{
        this.service.save(this.person).subscribe({
            next: person => {
                console.log('Saved with sucess: ', person)
            },
            error: e => console.log('Error: ', e)
        })
    }
}
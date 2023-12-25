import { Component } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Person} from "../model/person";
import {PersonService} from "../person.service";

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent {

  personService;
  testBackendMessage : any = '';


  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    jobInfo: new FormControl('')
  });

  constructor(personService: PersonService) {
    this.personService = personService;
  }
  onSubmit(event: any) {
    let person = new Person(this.profileForm.controls.firstName.value || '', this.profileForm.controls.lastName.value || '', this.profileForm.controls.jobInfo.value || '');
    this.personService.addPerson(person);
  }

  testBackend() {
    this.testBackendMessage = "test";
    this.personService.getTestMessage().subscribe(data => this.testBackendMessage = Object.values(data)[0]);
  }

}

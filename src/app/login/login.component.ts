import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedService } from '../shared.service';

interface Person {
  firstName: string;
  lastName: string;
  age: number;
  email: string;
  password?: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  person: Person = {firstName:" ", lastName:" ", email:" ",age: 0}
  constructor(private sharedService:SharedService) {  }
    
  ngOnInit(): void {
   
  }
  addPerson() {
    this.sharedService.addPerson(this.person);
    this.person =  {firstName:" ", lastName:" ", email:" ",age: 0}
  }
}








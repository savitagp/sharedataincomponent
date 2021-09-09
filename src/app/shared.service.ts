import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  data = [
    { firstName: 'John', lastName: 'Doe', age: '35', email: 'john@gmail.com' },
    { firstName: 'Michael', lastName: 'Smith', age: '39', email: 'smith@gmail.com'},
    { firstName: 'Michael', lastName: 'Jordan', age: '45', email: 'michael@gmail.com' },
    { firstName: 'Tanya', lastName: 'Blake', age: '47', email: 'tanya@gmail.com' }
  ];
 constructor(){
  
   }

   addPerson(person: any) {
     this.data.push(person);
   }

   getData() {
     return this.data;
   }
}
 


   
  
 
  
  // constructor() { }

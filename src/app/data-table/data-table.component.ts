import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {

  data: Array<any>;
  constructor(private sharedService:SharedService){
     this.data = sharedService.getData();
  }
  ngOnInit(): void {
  }
  onUpdate(){
    this.data = this.sharedService.getData();
}
}





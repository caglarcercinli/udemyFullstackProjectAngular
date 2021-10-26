import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  salesPersonList:SalesPerson[]=[
    new SalesPerson('anup','kumar','anup@mail.com',5000),
    new SalesPerson('john','doe','john@mail.com',4000),
    new SalesPerson('claire','murphy','claire@mail.com',3000),
    new SalesPerson('mai','truong','mai@mail.com',1000)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

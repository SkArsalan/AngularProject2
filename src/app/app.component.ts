import { Component } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  delete: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', delete: 'delete'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', delete: 'delete'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', delete: 'delete'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', delete: 'delete'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B', delete: 'delete'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', delete: 'delete'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N', delete: 'delete'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O', delete: 'delete'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F', delete: 'delete'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne', delete: 'delete'},
];
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'delete'];
  dataSource = ELEMENT_DATA;

  constructor(){}

  dele() {
    alert("your data is deleted")
    
  }

  }



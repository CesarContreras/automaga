import { Component, OnInit } from '@angular/core';

export interface Contacto{
  name: string;
  red:string;
}

const ELEMENT_DATA: Contacto[] = [
  { name: '449-904-68-97',red: 'facebook/AutoMaga'},
  { name: '9-17-48-97',red: 'Intagram/Automaga'},
];

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  constructor() { }
  displayedColumns: string[] = ['position'];
  dataSource = ELEMENT_DATA;
  ngOnInit(): void {
  }

}

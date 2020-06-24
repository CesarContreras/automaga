import { Component, OnInit} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent{

  
  Sub: Subscription;
  tamano: boolean; // estamos subscritos a un metodo que nos devuelve un valor verdadero cuando el tamaño de nuestra app se vuelve XS,
   //es un observador nos notificara cuando el tamaño sea XS
  constructor(public Observer: MediaObserver) {

  }
  ngOnInit() {
    this.Sub = this.Observer.media$.subscribe((res: MediaChange) => { //nos notifica de los BreakPoints, en este caso nos interesa cuando es xs
      console.log(res.mqAlias);
      this.tamano = res.mqAlias === "xs" ? true : false;
    })
  }
  ngOnDestroy() {
    this.Sub.unsubscribe();
  }

}

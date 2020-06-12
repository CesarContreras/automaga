import { Component, OnInit,Input } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  mediaSub: Subscription;
  tamanoXs: boolean; // estamos subscritos a un metodo que nos devuelve un valor verdadero cuando el tamaño de nuestra app se vuelve XS 
  constructor(public mediaObserver: MediaObserver) {

  }
  ngOnInit() {
    this.mediaSub = this.mediaObserver.media$.subscribe((res: MediaChange) => { //nos notifica de los BreakPoints, en este caso nos interesa cuando es xs
      console.log(res.mqAlias);
      this.tamanoXs = res.mqAlias === "xs" ? true : false;
    })
  }
  ngOnDestroy() {
    this.mediaSub.unsubscribe();
  }
}

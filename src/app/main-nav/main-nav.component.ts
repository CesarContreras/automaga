import { Component,OnInit} from '@angular/core';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent {

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

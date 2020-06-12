import { Component, OnInit,Input } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent{

  @Input() deviceXs: boolean;
  

}

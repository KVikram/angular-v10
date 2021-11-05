import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, VERSION, Version } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { SharedService } from '../services/shared.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  animations: [
    // animation triggers go here
    // ...
    trigger('openClose', [
      state('open', style({
        height: '50px',
        opacity: 1,
        backgroundColor: 'yellow',
        color: 'black'
      })),
      state('closed', style({
        height: '50px',
        opacity: 0.8,
        backgroundColor: '#c6ecff'
      })), transition('open => closed', [
        animate('0.5s')
      ]), transition('closed => open', [
        animate('0.5s')
      ])
    ]),
  ]
})
export class MenuComponent {

  ngVersion = VERSION.full;

  isDarkModeOn = false;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, public sharedSvc: SharedService) {
  }

  toggleDarkMode() {
    this.isDarkModeOn = !this.isDarkModeOn;
    this.sharedSvc.isDarkMode$.next(this.isDarkModeOn);
  }

}

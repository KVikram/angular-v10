import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, VERSION, Version } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
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
    console.log(this.isDarkModeOn);

  }

}

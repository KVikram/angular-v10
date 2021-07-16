import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  isDarkMode$ = new BehaviorSubject(false);

  isDarkMode = this.isDarkMode$.asObservable();
  constructor() { }
}

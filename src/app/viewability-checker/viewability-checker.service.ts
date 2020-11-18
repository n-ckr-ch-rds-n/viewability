import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ViewabilityCheckerService {
  observer: IntersectionObserver;

  constructor() { }

  initialiseObserver(options: IntersectionObserverInit): void {
    this.observer = new IntersectionObserver(() => console.log('Element in view'), options);
  }

  observe(element: HTMLElement): void {
    this.observer.observe(element);
  }


}

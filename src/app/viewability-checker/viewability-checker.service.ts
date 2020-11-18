import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ViewabilityCheckerService {
  observer: IntersectionObserver;

  constructor() { }

  initialiseObserver(options: IntersectionObserverInit): void {
    this.observer = new IntersectionObserver((entries) => console.log(entries), options);
  }

  observe(element: HTMLElement, options: IntersectionObserverInit): void {
    if (!this.observer) {
      this.initialiseObserver(options);
    }
    this.observer.observe(element);
  }


}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ViewabilityCheckerService {
  observer: IntersectionObserver;
  threshold = 0.5;

  constructor() { }

  initialiseObserver(options: IntersectionObserverInit): void {
    this.observer = new IntersectionObserver(
      entries => this.handleObserverEntry(entries[0]), options
    );
  }

  observe(element: HTMLElement, options: IntersectionObserverInit): void {
    if (!this.observer) {
      this.initialiseObserver(options);
    }
    this.observer.observe(element);
  }

  handleObserverEntry(entry: IntersectionObserverEntry): void {
    if (entry.intersectionRatio > this.threshold) {
      console.log('Element in view');
    } else {
      console.log('Element not in view');
    }
  }


}

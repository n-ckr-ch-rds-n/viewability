import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ViewabilityCheckerService {
  observer: IntersectionObserver;
  threshold = 0.5;
  timer: number;
  duration = 5000;
  inViewEvent = new EventEmitter();

  constructor() { }

  observe(element: HTMLElement, options: IntersectionObserverInit): void {
    if (!this.observer) {
      this.observer = this.initialiseObserver(options);
    }
    this.observer.observe(element);
  }

  private initialiseObserver(options: IntersectionObserverInit): IntersectionObserver {
    return new IntersectionObserver(entries => this.handleObserverEntry(entries[0]), options);
  }

  private registerViewEvent(): void {
    this.inViewEvent.emit();
    this.resetTimer();
  }

  private handleObserverEntry(entry: IntersectionObserverEntry): void {
    if (entry.intersectionRatio > this.threshold) {
      console.log('Element in view');
      if (!this.timer) {
        this.timer = this.initialiseTimer();
      }
    } else {
      console.log('Element not in view');
      if (this.timer) {
        this.resetTimer();
      }
    }
  }

  private initialiseTimer(): number {
    return setTimeout(() => this.registerViewEvent(), this.duration);
  }

  private resetTimer(): void {
    clearTimeout(this.timer);
    this.timer = null;
  }
}

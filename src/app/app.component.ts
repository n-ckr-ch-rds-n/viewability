import {Component, OnInit} from '@angular/core';
import {ViewabilityCheckerService} from './viewability-checker/viewability-checker.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'viewability';
  constructor(private viewabilityChecker: ViewabilityCheckerService) {
  }

  ngOnInit(): void {
    const observed = document.getElementById('observed');
    this.viewabilityChecker.observe(observed, {rootMargin: '0px', threshold: [0, 0.25, 0.5, 0.75, 1]});
    this.viewabilityChecker.inViewEvent.subscribe(() => {
      console.log('Registering in view event!');
    });
  }

}

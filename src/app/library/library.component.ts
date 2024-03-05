import { Component } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-library',
  standalone: true,
  imports: [],
  templateUrl: './library.component.html',
  styleUrl: './library.component.css'
})
export class LibraryComponent {
 currentNumber: number = 1;
  maxNumber: number = 100;
  private subscription!: Subscription;

  constructor() {}

  ngOnInit(): void {
    const source = interval(100); // Change interval duration as needed
    this.subscription = source.subscribe(() => {
      if (this.currentNumber < this.maxNumber) {
        this.currentNumber++;
      }
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}

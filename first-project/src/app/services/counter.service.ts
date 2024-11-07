import { computed, effect, Injectable, Signal, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  // private count = 0;

  // getCounter() {
  //   return this.count;
  // }

  // incrementCounter() {
  //   this.count = this.count + 1;
  // }

  //! Using Signals:
  private count = signal(0);
  // computed signals:these are read-only signals that are derived from other signals,when the signals they depend on change, they are automatically updated, we can't change the value of computed signals manually
  doubleCount: Signal<number> = computed(() => this.count() * 2);

  constructor() {
    effect(() => {
      console.log('Count:', this.count(), 'Double Count:', this.doubleCount());
    });
  }

  getCounter() {
    return this.count();
  }

  incrementCounter() {
    // this.count.set(this.count() + 1); // This will work but use set method only when you want to change the value of signal

    // when updating basd on previous value, use update method
    this.count.update((prev) => prev + 1);
  }
}

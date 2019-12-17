import { Injectable } from '@angular/core';
import { timer, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClockService {

  public tick;
  private tick_period_ms = 500;

  constructor() {
    this.tick = timer(this.tick_period_ms, this.tick_period_ms);
    this.tick.subscribe(t => console.log(t));
  }
}

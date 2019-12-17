import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { ClockService } from '../../core/services/clock/clock.service';

@Component({
  selector: 'app-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.scss']
})
export class FrameComponent implements OnInit, AfterViewChecked {

  private arenaHeight: number = 512;
  private arenaWidth: number = 512;

  constructor(private clockService: ClockService) {

  }

  updateStatus(): void {
    console.log('UPDATE STATUS - Frame');
  }

  ngAfterViewChecked() {
    console.log('View Checked')
  }

  ngOnInit() {
    this.clockService.tick.subscribe(t => this.updateStatus());
  }

}

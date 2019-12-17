import { Component, OnInit, HostListener } from '@angular/core';
import { ClockService } from '../../core/services/clock/clock.service';

export enum KEY_CODE {
  DOWN_ARROW = 40,
  RIGHT_ARROW = 39,
  UP_ARROW = 38,
  LEFT_ARROW = 37
}

export enum DIRECTION {
  RIGHT, DOWN, LEFT, UP
}

@Component({
  selector: 'app-snake',
  templateUrl: './snake.component.html',
  styleUrls: ['./snake.component.scss']
})
export class SnakeComponent implements OnInit {

  private arenaHeight: number = 512;
  private arenaWidth: number = 512;

  private blockWidth: number = 16;

  private position_x: number = 0; // TODO: make a point class type
  private position_y: number = 0;

  private direction: number = DIRECTION.RIGHT;


  constructor(private clockService: ClockService) {

  }

  @HostListener('window:keydown', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.keyCode === KEY_CODE.RIGHT_ARROW) {
      this.direction = DIRECTION.RIGHT;
    }
    else if (event.keyCode === KEY_CODE.LEFT_ARROW) {
      this.direction = DIRECTION.LEFT;
    }
    else if (event.keyCode === KEY_CODE.UP_ARROW) {
      this.direction = DIRECTION.UP;
    }
    else if (event.keyCode === KEY_CODE.DOWN_ARROW) {
      this.direction = DIRECTION.DOWN;
    }
  }

  updateStatus(): void {
    console.log('UPDATE STATUS - snake');
    if (this.direction === DIRECTION.RIGHT) {
      this.position_x = this.position_x + this.blockWidth;
    }
    else if (this.direction === DIRECTION.DOWN) {
      this.position_y = this.position_y + this.blockWidth;
    }
    else if (this.direction === DIRECTION.LEFT) {
      this.position_x = this.position_x - this.blockWidth;
    }
    else if (this.direction === DIRECTION.UP) {
      this.position_y = this.position_y - this.blockWidth;
    }
  }

  ngOnInit() {
    this.clockService.tick.subscribe(t => this.updateStatus());
  }

}

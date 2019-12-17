import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { FrameComponent } from './frame/frame.component';
import { SnakeComponent } from './snake/snake.component';

@NgModule({
  declarations: [HomeComponent, FrameComponent, SnakeComponent],
  imports: [CommonModule, SharedModule, HomeRoutingModule]
})
export class HomeModule {}

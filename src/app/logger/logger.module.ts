import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoggerRoutingModule } from './logger-routing.module';
import { LoggerService } from './logger.service';

@NgModule({
  imports: [
    CommonModule,
    LoggerRoutingModule
  ],
  declarations: [],
  providers: [LoggerService]
})
export class LoggerModule { }

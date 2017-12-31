import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoggerRoutingModule } from './logger-routing.module';
import { LoggerService } from './logger.service';
import { LogComponent } from './log/log.component';

@NgModule({
  imports: [
    CommonModule,
    LoggerRoutingModule
  ],
  declarations: [LogComponent],
  providers: [LoggerService]
})
export class LoggerModule { }

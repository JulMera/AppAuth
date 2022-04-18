import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LogInAndRegisterPage } from './log-in-and-register';

@NgModule({
  declarations: [
    LogInAndRegisterPage,
  ],
  imports: [
    IonicPageModule.forChild(LogInAndRegisterPage),
  ],
})
export class LogInAndRegisterPageModule {}

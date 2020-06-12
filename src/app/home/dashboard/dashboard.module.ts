import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRountingModule } from './dashboard-rounting.module';
import { DashboardComponent  } from './dashboard.component';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRountingModule
  ],
  exports:[
    DashboardRountingModule
  ]
})
export class DashboardModule { }

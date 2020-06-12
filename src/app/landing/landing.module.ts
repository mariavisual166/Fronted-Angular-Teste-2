import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingRountingModule } from './landing-rounting.module';
import {ReactiveFormsModule} from '@angular/forms';
import {LoginComponent} from './login/login.component';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LandingRountingModule,
    ReactiveFormsModule
  ],
  exports:[
    LandingRountingModule,
    ReactiveFormsModule
  ]
})
export class LandingModule { }

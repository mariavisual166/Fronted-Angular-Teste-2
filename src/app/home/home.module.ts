import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRountingModule} from './home-rounting.module';
import {ReactiveFormsModule} from '@angular/forms';
import {CreateComponent} from './create/create.component';

@NgModule({
  declarations: [CreateComponent],
  imports: [
    CommonModule,
    HomeRountingModule,
    ReactiveFormsModule
  ],
  exports:[
    HomeRountingModule,
    ReactiveFormsModule
    
  ]
})
export class HomeModule { }

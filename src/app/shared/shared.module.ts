import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [SharedComponent, FooterComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }

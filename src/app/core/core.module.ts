import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutModule } from './layout/layout.module';
import { CountdownComponent } from './countdown/countdown.component';

@NgModule({
  declarations: [CountdownComponent],
  imports: [
    CommonModule,
    LayoutModule
  ]
})
export class CoreModule {}

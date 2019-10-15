import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BodyModule, GridModule, SharedModule} from '@progress/kendo-angular-grid';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    GridModule,
    BodyModule,
    SharedModule
  ],
  exports: [
    GridModule,
    BodyModule,
    SharedModule
  ],
  providers: [
  ]
})
export class KendoModule { }

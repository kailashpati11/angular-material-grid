import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from '../grid/grid.component';
import { MaterialModule } from 'src/material.module';
import { GridColumnComponent } from '../grid/grid-column/grid-column.component';

const components = [
  GridComponent,
  GridColumnComponent
]

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [...components]
})
export class SharedModule { }

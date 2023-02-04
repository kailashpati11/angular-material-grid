import { NgModule } from '@angular/core';
import {MatTableModule} from '@angular/material/table'
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon'

@NgModule({
    imports:[
        MatTableModule,
        MatButtonModule,
        MatCheckboxModule,
        MatIconModule
    ],
    exports: [
        MatTableModule,
        MatButtonModule,
        MatCheckboxModule,
        MatIconModule
    ]
})
export class MaterialModule { }

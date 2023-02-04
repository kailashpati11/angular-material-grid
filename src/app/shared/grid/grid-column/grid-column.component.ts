import { Component, ContentChild, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-grid-column',
  templateUrl: './grid-column.component.html',
  styleUrls: ['./grid-column.component.scss']
})
export class GridColumnComponent {

  //column field name, field name should be same as field name in column config.
  @Input()
  name!: string;

  //content child of column template.
  @ContentChild('cellTemplate')
  cellTemplate!: TemplateRef<any>;

}

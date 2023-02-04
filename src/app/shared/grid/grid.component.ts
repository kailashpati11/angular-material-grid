import { AfterContentInit, Component, ContentChildren, Input, OnInit, QueryList, ViewChildren } from '@angular/core';
import { GridColumnConfig } from './config/column-config';
import { GridColumnComponent } from './grid-column/grid-column.component';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})

export class GridComponent implements OnInit, AfterContentInit {

  @Input()
  columnConfig!: GridColumnConfig[];

  @Input()
  displayedColumns!: string[];

  @Input()
  dataSource!: any[];

  @ContentChildren(GridColumnComponent)
  cellTemplates!: QueryList<GridColumnComponent>;

  customColumnMap: any = [];

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    this.cellTemplates.forEach(oColumn => {
      this.customColumnMap[oColumn.name] = oColumn.cellTemplate;
    });
  }
}

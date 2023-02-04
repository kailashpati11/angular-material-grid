import { Component, Input, OnInit } from '@angular/core';

export interface CardConfig {
  color: string;
  text: string;
  count: number;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input()
  config!: CardConfig[];

  constructor() { }

  ngOnInit(): void {
  }

}

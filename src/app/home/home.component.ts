import { Component, OnInit } from '@angular/core';
import { CardConfig } from '../shared/card/card.component';
import { GridColumnConfig } from '../shared/grid/config/column-config';
import { cardsData, GridData, gridData } from './constant';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  displayedColumns: string[] = [
    'ticketId',
    'client',
    'subject',
    'category',
    'serverity',
    'currentStatus',
    'loggedOn',
    'logggedBy',
    'currentWith',
    'noOfJobs',
    'action'
  ];

  dataSource:GridData[] = gridData;

  columnConfig: GridColumnConfig[] = [
    {
      name: 'ticketId',
      title: 'Ticket Id'
    },
    {
      name: 'client',
      title: 'Client'
    },
    {
      name: 'subject',
      title: 'Subject',
    },
    {
      name: 'category',
      title: 'Category'
    },
    {
      name: 'serverity',
      title: 'Severity'
    },
    {
      name: 'currentStatus',
      title: 'Current Status',
      isCustom: true
    },
    {
      name: 'loggedOn',
      title: 'Logged On',
    },
    {
      name: 'logggedBy',
      title: 'Logged By'
    },
    {
      name: 'currentWith',
      title: 'Current With'
    },
    {
      name: 'noOfJobs',
      title: 'No Of Jobs'
    },
    {
      name: 'action',
      title: 'Action',
      isCustom: true
    }
  ]

  cardsData: CardConfig[] = cardsData;

  constructor() { }

  ngOnInit(): void {
  }

  getStatusClass(status: string): string {
    switch (status) {
      case 'Logged':
        return 'bg-teal-500';
      case 'Recieved':
        return 'bg-amber-600';
      case 'InProgress':
        return 'bg-red-500';
      case 'Re-assigned':
        return 'bg-sky-300';
      case 'Esclated':
        return 'bg-lime-300';
      case 'Retraced':
        return 'bg-slate-400';
      case 'Rejected':
        return 'bg-gray-400';
      case 'Reopend':
        return 'bg-fuchsia-700';
      case 'Closed':
        return 'bg-neutral-500';
      case 'Resolved':
        return 'bg-purple-300';
      default:
        return '';
    }
  }

}

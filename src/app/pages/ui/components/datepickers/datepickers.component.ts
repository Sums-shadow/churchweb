import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { BasePageComponent } from '../../../base-page';
import { IAppState } from '../../../../interfaces/app-state';
import { HttpService } from '../../../../services/http/http.service';

@Component({
  selector: 'page-datepickers',
  templateUrl: './datepickers.component.html',
  styleUrls: ['./datepickers.component.scss']
})
export class PageDatepickersComponent extends BasePageComponent implements OnInit, OnDestroy {
  date: Date;
  dateRange: Date[];
  size: string;
  dateMode: string;

  constructor(
    store: Store<IAppState>,
    httpSv: HttpService
  ) {
    super(store, httpSv);

    this.pageData = {
      title: 'Datepickers',
      loaded: true,
      breadcrumbs: [
        {
          title: 'UI Kit',
          route: 'default-dashboard'
        },
        {
          title: 'Components',
          route: 'default-dashboard'
        },
        {
          title: 'Datepickers'
        }
      ]
    };
    this.date = null;
    this.dateRange = [];
    this.size = 'default';
    this.dateMode = 'time';
  }

  ngOnInit() {
    super.ngOnInit();
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }

  onChange(result: Date): void { }

  onOk(result: Date): void { }

  handleDateOpenChange(open: boolean): void {
    if (open) {
      this.dateMode = 'time';
    }
  }

  handleDatePanelChange(mode: string): void { }
}

import { Component, OnDestroy, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { EChartOption } from 'echarts';
import { BasePageComponent } from '../../base-page';
import { IAppState } from '../../../interfaces/app-state';
import { HttpService } from '../../../services/http/http.service';

@Component({
  selector: 'page-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class PageDashboardComponent extends BasePageComponent implements OnInit, OnDestroy {
  
  appointments: any[];
  piePatternSrc: string;
  piePatternImg: any;
  pieStyle: any;

  constructor(
    store: Store<IAppState>,
    httpSv: HttpService
  ) {
    super(store, httpSv);

    this.pageData = {
      title: '',
      loaded: false,
      breadcrumbs: [
        {
          title: 'Dashboards',
          route: 'default-dashboard'
        },
        {
          title: 'Default'
        }
      ]
    };
     
  }

  ngOnInit() {
    super.ngOnInit();

    this.getData('assets/data/last-appointments.json', 'appointments', 'setLoaded');

    
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }

  
}

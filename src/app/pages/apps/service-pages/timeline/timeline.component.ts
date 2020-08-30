import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { EChartOption } from 'echarts';
import { BasePageComponent } from '../../../base-page';
import { IAppState } from '../../../../interfaces/app-state';
import { HttpService } from '../../../../services/http/http.service';
import { ITimelineBox } from '../../../../ui/interfaces/timeline';

@Component({
  selector: 'page-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class PageTimelineComponent extends BasePageComponent implements OnInit, OnDestroy {
  piOptions: EChartOption;
  timelineData: ITimelineBox[];
  lastPayments: any[];
  lastPatients: any[];

  constructor(
    store: Store<IAppState>,
    httpSv: HttpService
  ) {
    super(store, httpSv);

    this.pageData = {
      title: 'Events timeline',
      loaded: true,
      breadcrumbs: [
        {
          title: 'Apps',
          route: 'default-dashboard'
        },
        {
          title: 'Service pages',
          route: 'default-dashboard'
        },
        {
          title: 'Events timeline'
        }
      ]
    };
    this.lastPayments = [
      {
        date: '18 Feb 2019',
        amount: '$155'
      },
      {
        date: '17 Feb 2019',
        amount: '$365'
      },
      {
        date: '17 Feb 2019',
        amount: '$234'
      },
      {
        date: '16 Feb 2019',
        amount: '$190'
      }
    ];
    this.lastPatients = [
      {
        date: '18 Feb 2019',
        patient: {
          name: 'Liam',
          img: '/assets/content/user-40-1.jpg'
        }
      },
      {
        date: '17 Feb 2019',
        patient: {
          name: 'Emma',
          img: '/assets/content/user-40-2.jpg'
        }
      },
      {
        date: '17 Feb 2019',
        patient: {
          name: 'Olivia',
          img: '/assets/content/user-40-3.jpg'
        }
      },
      {
        date: '16 Feb 2019',
        patient: {
          name: 'Ava',
          img: '/assets/content/user-40-4.jpg'
        }
      }
    ];
  }

  ngOnInit() {
    super.ngOnInit();

    this.getData('assets/data/events-timeline.json', 'timelineData', 'setLoaded')

    this.piOptions = {
      color: ['#336cfb'],
      grid: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
      },
      xAxis: {
        boundaryGap: false,
        type: 'category'
      },
      yAxis: {
        show: false
      },
      series: [
        {
          name: 'Patients 2019',
          type: 'line',
          smooth: true,
          data: [60, 124, 132, 143, 138, 178, 194, 211, 234, 257, 241, 226],
          areaStyle: {}
        }
      ]
    };
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }
}

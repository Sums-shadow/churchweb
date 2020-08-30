import { Component, OnDestroy, OnInit } from '@angular/core';

import * as shape from 'd3-shape';
import { Store } from '@ngrx/store';
import { BasePageComponent } from '../../../base-page';
import { IAppState } from '../../../../interfaces/app-state';
import { HttpService } from '../../../../services/http/http.service';

@Component({
  selector: 'page-ngx-charts',
  templateUrl: './ngx-charts.component.html',
  styleUrls: ['./ngx-charts.component.scss']
})
export class PageNgxChartsComponent extends BasePageComponent implements OnInit, OnDestroy {
	barChartData: any[];
  lineChartData: any[];
  pieChartData: any[];
  advancedPieChartData: any[];
  polarChartData: any[];
  gaugeChartData: any[];
  ngxChartColors: any;
  ngxCurve: any;

  constructor(
    store: Store<IAppState>,
    httpSv: HttpService
  ) {
    super(store, httpSv);

    this.pageData = {
      title: 'Ngx charts',
      loaded: true,
      breadcrumbs: [
        {
          title: 'UI Kit',
          route: 'default-dashboard'
        },
        {
          title: 'Charts',
          route: 'default-dashboard'
        },
        {
          title: 'Ngx charts'
        }
      ]
    };

    this.ngxChartColors = {
      domain: ['#336cfb', '#b7ce63', '#e9e165', '#ed5564', '#64B5F6', '#1f2022']
    };
    this.ngxCurve = shape.curveCardinal;
  }

  ngOnInit() {
    super.ngOnInit();

    this.barChartData = [
      {
        'name': 'USA',
        'value': 100
      },
      {
        'name': 'France',
        'value': 122
      },
      {
        'name': 'Canada',
        'value': 144
      },
      {
        'name': 'UK',
        'value': 112
      },
      {
        'name': 'Ukraine',
        'value': 124
      },
      {
        'name': 'Australia',
        'value': 135
      }
    ];
    this.lineChartData = [
      {
        'name': 'Ukraine',
        'series': [
          {
            'value': 2180,
            'name': '2018-09-20'
          },
          {
            'value': 6997,
            'name': '2018-09-21'
          },
          {
            'value': 3550,
            'name': '2018-09-22'
          },
          {
            'value': 5783,
            'name': '2018-09-23'
          },
          {
            'value': 6669,
            'name': '2018-09-24'
          }
        ]
      },
      {
        'name': 'Island',
        'series': [
          {
            'value': 5835,
            'name': '2018-09-20'
          },
          {
            'value': 3333,
            'name': '2018-09-21'
          },
          {
            'value': 5375,
            'name': '2018-09-22'
          },
          {
            'value': 3378,
            'name': '2018-09-23'
          },
          {
            'value': 6439,
            'name': '2018-09-24'
          }
        ]
      },
      {
        'name': 'Italy',
        'series': [
          {
            'value': 3220,
            'name': '2018-09-20'
          },
          {
            'value': 5725,
            'name': '2018-09-21'
          },
          {
            'value': 6130,
            'name': '2018-09-22'
          },
          {
            'value': 3897,
            'name': '2018-09-23'
          },
          {
            'value': 6612,
            'name': '2018-09-24'
          }
        ]
      },
      {
        'name': 'Germany',
        'series': [
          {
            'value': 4141,
            'name': '2018-09-20'
          },
          {
            'value': 5929,
            'name': '2018-09-21'
          },
          {
            'value': 2304,
            'name': '2018-09-22'
          },
          {
            'value': 2469,
            'name': '2018-09-23'
          },
          {
            'value': 5441,
            'name': '2018-09-24'
          }
        ]
      },
      {
        'name': 'Spain',
        'series': [
          {
            'value': 2147,
            'name': '2018-09-20'
          },
          {
            'value': 2931,
            'name': '2018-09-21'
          },
          {
            'value': 4152,
            'name': '2018-09-22'
          },
          {
            'value': 2643,
            'name': '2018-09-23'
          },
          {
            'value': 2933,
            'name': '2018-09-24'
          }
        ]
      }
    ];
    this.pieChartData = [
      {
        'name': 'Germany',
        'value': 40632
      },
      {
        'name': 'France',
        'value': 36745
      },
      {
        'name': 'United Kingdom',
        'value': 36240
      },
      {
        'name': 'Spain',
        'value': 33000
      },
      {
        'name': 'Italy',
        'value': 35800
      }
    ];
    this.advancedPieChartData = [
      {
        'name': 'Sales',
        'value': 47
      },
      {
        'name': 'In-store sales',
        'value': 53
      }
    ];
    this.polarChartData = [
      {
        'name': 'Income',
        'series': [
          {
            'value': 2850,
            'name': 'Monday'
          },
          {
            'value': 3959,
            'name': 'Tuesday'
          },
          {
            'value': 5906,
            'name': 'Wednesday'
          },
          {
            'value': 3805,
            'name': 'Thursday'
          },
          {
            'value': 6354,
            'name': 'Friday'
          },
          {
            'value': 4415,
            'name': 'Saturday'
          }
        ]
      },
      {
        'name': 'Expecies',
        'series': [
          {
            'value': 1030,
            'name': 'Monday'
          },
          {
            'value': 3376,
            'name': 'Tuesday'
          },
          {
            'value': 4205,
            'name': 'Wednesday'
          },
          {
            'value': 1505,
            'name': 'Thursday'
          },
          {
            'value': 3654,
            'name': 'Friday'
          },
          {
            'value': 1915,
            'name': 'Saturday'
          }
        ]
      },
      {
        'name': 'Total',
        'series': [
          {
            'value': 1850,
            'name': 'Monday'
          },
          {
            'value': 1759,
            'name': 'Tuesday'
          },
          {
            'value': 4906,
            'name': 'Wednesday'
          },
          {
            'value': 2580,
            'name': 'Thursday'
          },
          {
            'value': 4954,
            'name': 'Friday'
          },
          {
            'value': 2815,
            'name': 'Saturday'
          }
        ]
      }
    ];
    this.gaugeChartData = [
      {
        "name": "Germany",
        "value": 40632
      },
      {
        "name": "United States",
        "value": 49737
      },
      {
        "name": "France",
        "value": 36745
      },
      {
        "name": "United Kingdom",
        "value": 36240
      },
      {
        "name": "Spain",
        "value": 33000
      },
      {
        "name": "Italy",
        "value": 35800
      }
    ];
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }
}

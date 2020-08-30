import { Component, OnDestroy, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { BasePageComponent } from '../../../base-page';
import { IAppState } from '../../../../interfaces/app-state';
import { HttpService } from '../../../../services/http/http.service';

@Component({
  selector: 'page-ng2-charts',
  templateUrl: './ng2-charts.component.html',
  styleUrls: ['./ng2-charts.component.scss']
})
export class PageNg2ChartsComponent extends BasePageComponent implements OnInit, OnDestroy {
	chartColors: any;

	lineChartData: any[];
	lineChartOptions: any;
	lineChartLegend: boolean;
	lineChartType: string;
	lineChartLabels: any[];

	barChartOptions: any;
	barChartLabels: string[];
	barChartType: string;
	barChartLegend: boolean;
	barChartData: any[];
  barChartColors: any;

	doughnutChartLabels: string[];
	doughnutChartData: number[];
	doughnutChartType: string;
  doughnutChartColors: any;

	radarChartLabels: string[];
	radarChartData: any;
	radarChartType: string;

	pieChartLabels: string[];
	pieChartData: number[];
	pieChartType: string;
  pieChartColors: any;

	polarAreaChartLabels: string[];
	polarAreaChartData: number[];
	polarAreaChartType: string;
	polarAreaChartLegend: boolean;
  polarAreaChartColors: any

  constructor(
    store: Store<IAppState>,
    httpSv: HttpService
	) {
    super(store, httpSv);

    this.pageData = {
      title: 'Ng2 charts',
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
          title: 'Ng2 charts'
        }
      ]
    };

    this.chartColors = [
      {
        backgroundColor: 'transparent',
        borderColor: '#b7ce63',
        pointBackgroundColor: '#b7ce63',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#b7ce63'
      },
      {
        backgroundColor: 'transparent',
        borderColor: '#64B5F6',
        pointBackgroundColor: '#64B5F6',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#64B5F6'

      },
      {
        backgroundColor: 'transparent',
        borderColor: '#ed5564',
        pointBackgroundColor: '#ed5564',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#ed5564'
      }
    ];

		this.lineChartData =[
			{ data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
			{ data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
			{ data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C' }
		];
		this.lineChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
		this.lineChartOptions = {
			responsive: true
		};
		this.lineChartLegend = true;
		this.lineChartType = 'line';

		this.barChartOptions = {
			scaleShowVerticalLines: false,
			responsive: true
		};
		this.barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
		this.barChartType = 'bar';
		this.barChartLegend = true;
		this.barChartData = [
			{ data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
			{ data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
		];
		this.barChartColors = [
      {
        backgroundColor: '#e9e165',
        borderColor: '#e9e165',
        pointBackgroundColor: '#e9e165',
        pointBorderColor: '#e9e165',
        pointHoverBackgroundColor: '#e9e165',
        pointHoverBorderColor: '#e9e165'
      },
      {
        backgroundColor: '#b7ce63',
        borderColor: '#b7ce63',
        pointBackgroundColor: '#b7ce63',
        pointBorderColor: '#b7ce63',
        pointHoverBackgroundColor: '#b7ce63',
        pointHoverBorderColor: '#b7ce63'
      }
    ];

		this.doughnutChartLabels = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
		this.doughnutChartData = [350, 450, 100];
		this.doughnutChartType = 'doughnut';
    this.doughnutChartColors = [
      { backgroundColor: ['#ed5564', '#e9e165', '#64B5F6'] },
      { borderColor: ['#ed5564', '#e9e165', '#64B5F6'] }
    ];

		this.radarChartLabels = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];
		this.radarChartData = [
      { data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A' },
      { data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B' }
		];
		this.radarChartType = 'radar';

		this.pieChartLabels = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
		this.pieChartData = [300, 500, 100];
		this.pieChartType = 'pie';
		this.pieChartColors = [
      { backgroundColor: ['#336cfb', '#b7ce63', '#ed5564'] },
      { borderColor: ['#336cfb', '#b7ce63', '#ed5564'] }
    ];

		this.polarAreaChartLabels = ['Download Sales', 'In-Store Sales', 'Mail Sales', 'Corporate Sales'];
		this.polarAreaChartData = [300, 500, 100, 120];
		this.polarAreaChartType = 'polarArea';
		this.polarAreaChartLegend = true;
    this.polarAreaChartColors = [
      { backgroundColor: ['#1f2022', '#336cfb', '#b7ce63', '#e9e165'] },
      { borderColor: ['#1f2022', '#336cfb', '#b7ce63', '#e9e165'] }
    ];
  }

  ngOnInit() {
    super.ngOnInit();
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }
}

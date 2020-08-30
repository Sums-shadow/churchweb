import { Component, OnDestroy, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { BasePageComponent } from '../../../base-page';
import { IAppState } from '../../../../interfaces/app-state';
import { HttpService } from '../../../../services/http/http.service';
import { latLng, tileLayer } from 'leaflet';

@Component({
  selector: 'page-leaflet-maps',
  templateUrl: './leaflet-maps.component.html',
  styleUrls: ['./leaflet-maps.component.scss']
})
export class PageLeafletMapsComponent extends BasePageComponent implements OnInit, OnDestroy {
	options: any;

  constructor(
    store: Store<IAppState>,
    httpSv: HttpService
  ) {
    super(store, httpSv);

    this.pageData = {
      title: 'Leaflet map',
      loaded: true,
      breadcrumbs: [
        {
          title: 'UI Kit',
          route: 'default-dashboard'
        },
        {
          title: 'Maps',
          route: 'default-dashboard'
        },
        {
          title: 'Leaflet map'
        }
      ],
      fullFilled: true
    };

	}

  ngOnInit() {
    super.ngOnInit();

    this.options = {
      layers: [
        tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
      ],
      zoom: 5,
      center: latLng(46.879966, -121.726909)
    };
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }
}

import { Component, OnDestroy, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { BasePageComponent } from '../../../base-page';
import { IAppState } from '../../../../interfaces/app-state';
import { HttpService } from '../../../../services/http/http.service';

@Component({
  selector: 'page-autocompletes',
  templateUrl: './autocompletes.component.html',
  styleUrls: ['./autocompletes.component.scss']
})
export class PageAutocompletesComponent extends BasePageComponent implements OnInit, OnDestroy {
	data: string[];

  constructor(
    store: Store<IAppState>,
    httpSv: HttpService
  ) {
    super(store, httpSv);

    this.data = [];
    this.pageData = {
      title: 'Autocompletes',
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
          title: 'Autocompletes'
        }
      ]
    };
  }

	ngOnInit() {
    super.ngOnInit();

    this.getData('assets/data/autocomplete.json', 'data');
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }
}

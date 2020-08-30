import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store'
import { BasePageComponent } from '../../../base-page';
import { IAppState } from '../../../../interfaces/app-state';
import { HttpService } from '../../../../services/http/http.service';

@Component({
  selector: 'page-icons-sli',
  templateUrl: './icons-sli.component.html',
  styleUrls: ['./icons-sli.component.scss']
})
export class PageIconsSliComponent extends BasePageComponent implements OnInit {
  icons: string[];

  constructor(
    store: Store<IAppState>,
    httpSv: HttpService
  ) {
    super(store, httpSv);

    this.icons = [];

    this.pageData = {
      title: 'Simple line icons',
      loaded: true,
      breadcrumbs: [
        {
          title: 'UI Kit',
          route: 'default-dashboard'
        },
        {
          title: 'Icons',
          route: 'default-dashboard'
        },
        {
          title: 'Simple line'
        }
      ]
    };
  }

  ngOnInit() {
    super.ngOnInit();

    this.getData('assets/data/icons-simpleline.json', 'icons', 'setLoaded');
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }
}

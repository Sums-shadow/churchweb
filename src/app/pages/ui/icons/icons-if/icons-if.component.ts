import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { BasePageComponent } from '../../../base-page';
import { IAppState } from '../../../../interfaces/app-state';
import { HttpService } from '../../../../services/http/http.service';

@Component({
  selector: 'page-icons-if',
  templateUrl: './icons-if.component.html',
  styleUrls: ['./icons-if.component.scss']
})
export class PageIconsIfComponent extends BasePageComponent implements OnInit {
  icons: string[];

  constructor(
    store: Store<IAppState>,
    httpSv: HttpService
  ) {
    super(store, httpSv);

    this.icons = [];

    this.pageData = {
      title: 'Icofont icons',
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
          title: 'Icofont'
        }
      ]
    };
  }

  ngOnInit() {
    super.ngOnInit();

    this.getData('assets/data/icons-icofont.json', 'icons', 'setLoaded');
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }
}

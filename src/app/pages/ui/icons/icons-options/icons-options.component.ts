import { Component, OnDestroy, OnInit } from '@angular/core';

import { Store } from '@ngrx/store'
import { HttpService } from '../../../../services/http/http.service';
import { BasePageComponent } from '../../../base-page';
import { IAppState } from '../../../../interfaces/app-state';

@Component({
  selector: 'page-icons-options',
  templateUrl: './icons-options.component.html',
  styleUrls: ['./icons-options.component.scss']
})
export class PageIconsOptionsComponent extends BasePageComponent implements OnInit, OnDestroy {
  defaultIcons: string[];
  iconsColor: { class: string, color: string }[];
  iconsHoverColor: { class: string, color: string[] }[];
  iconsBgColor: { class: string, color: string }[];
  iconsHoverBgColor: { class: string, color: string[] }[];
  iconsBorderColor: { class: string, color: string, borderColor: string }[];
  iconsHoverBorderColor: { class: string, color: string }[];
  iconsBorderType: { class: string, color: string, type: string }[];
  iconsGradient: { class: string, color: string[] }[];
  iconsShape: string[];

  constructor(
    store: Store<IAppState>,
    httpSv: HttpService
  ) {
    super(store, httpSv);

    this.pageData = {
      title: 'Icons options',
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
          title: 'Icons options'
        }
      ]
    };
  }

  ngOnInit() {
    super.ngOnInit();

    this.getData('assets/data/icons-options.json');
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }

  getData(url: string) {
    this.httpSv.getData(url).subscribe(
      data => {
        this.defaultIcons = data.default;
        this.iconsColor = data.color;
        this.iconsHoverColor = data.hoverColor;
        this.iconsBgColor = data.bgColor;
        this.iconsHoverBgColor = data.hoverBgColor;
        this.iconsBorderColor = data.borderColor;
        this.iconsHoverBorderColor = data.hoverBorderColor;
        this.iconsBorderType = data.borderType;
        this.iconsGradient = data.gradient;
        this.iconsShape = data.shape;

        this.setLoaded();
      },
      err => {
        console.log(err);
      }
    );
  }
}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Store } from '@ngrx/store';
import { BasePageComponent } from '../../../base-page';
import { IAppState } from '../../../../interfaces/app-state';
import { HttpService } from '../../../../services/http/http.service';
import { IOption } from '../../../../ui/interfaces/option';

@Component({
  selector: 'page-form-layouts',
  templateUrl: './form-layouts.component.html',
  styleUrls: ['./form-layouts.component.scss']
})
export class PageFormLayoutsComponent extends BasePageComponent implements OnInit, OnDestroy {
  selectData: IOption[];
  autocompleteData: string[];
  firstForm: FormGroup;
  secondForm: FormGroup;

  constructor(
    store: Store<IAppState>,
    httpSv: HttpService,
    private formBuilder: FormBuilder
  ) {
    super(store, httpSv);

    this.pageData = {
      title: 'Form layouts',
      loaded: true,
      breadcrumbs: [
        {
          title: 'UI Kit',
          route: 'default-dashboard'
        },
        {
          title: 'Forms',
          route: 'default-dashboard'
        },
        {
          title: 'Layouts'
        }
      ]
    };
  }

  ngOnInit() {
    super.ngOnInit();

    this.getData('assets/data/options.json', 'selectData');
    this.getData('assets/data/autocomplete.json', 'autocompleteData');
    this.initFirstForm();
    this.initSecondForm();
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }

  initFirstForm() {
    this.firstForm = this.formBuilder.group({
      name: ['', Validators.required],
      continent: ['', Validators.required]
    });
  }

  initSecondForm() {
    this.secondForm = this.formBuilder.group({
      field1: ['', Validators.required],
      field2: ['']
    });
  }

  sendFirstForm(form: FormGroup) {

  }

  sendSecondForm(form: FormGroup) {

  }

  sendThirdForm(value: string) {

  }
}

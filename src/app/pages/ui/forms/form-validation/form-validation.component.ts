import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Store } from '@ngrx/store';
import { BasePageComponent } from '../../../base-page';
import { IAppState } from '../../../../interfaces/app-state';
import { HttpService } from '../../../../services/http/http.service';

@Component({
  selector: 'page-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.scss']
})
export class PageFormValidationComponent extends BasePageComponent implements OnInit, OnDestroy {
  basicForm: FormGroup;
  labelForm: FormGroup;
  messagesForm: FormGroup;
  loadingBasicForm: boolean;
  loadingLabelForm: boolean;
  loadingMessagesForm: boolean;

  constructor(
    store: Store<IAppState>,
    httpSv: HttpService,
    private formBuilder: FormBuilder
  ) {
    super(store, httpSv);

    this.pageData = {
      title: 'Form validation',
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
          title: 'Validation'
        }
      ]
    };
    this.loadingBasicForm = false;
    this.loadingLabelForm = false;
    this.loadingMessagesForm = false;
  }

  ngOnInit() {
    super.ngOnInit();

    this.initBasicForm();
    this.initLabelForm();
    this.initMessagesForm();
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }

  initBasicForm() {
    this.basicForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      comment: ['', Validators.required]
    });
  }

  initLabelForm() {
    this.labelForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  initMessagesForm() {
    this.messagesForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: [''],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  sendBasicForm(valid: boolean) {
    if (valid) {
      this.loadingBasicForm = true;

      setTimeout(() => {
        this.loadingBasicForm = false;
        this.basicForm.reset();
      }, 1000);
    }
  }

  sendLabelForm(valid: boolean) {
    if (valid) {
      this.loadingLabelForm = true;

      setTimeout(() => {
        this.loadingLabelForm = false;
        this.labelForm.reset();
      }, 1000);
    }
  }

  sendMessagesForm(valid: boolean) {
    if (valid) {
      this.loadingMessagesForm = true;

      setTimeout(() => {
        this.loadingMessagesForm = false;
        this.messagesForm.reset();
      }, 1000);
    }
  }

  resetMessagesForm() {
    this.messagesForm.reset();
    this.loadingMessagesForm = false;
  }
}

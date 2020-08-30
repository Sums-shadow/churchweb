import { Component, OnDestroy, OnInit } from '@angular/core';
import { BasePageComponent } from '../../base-page';
import { Store } from '@ngrx/store';
import { IAppState } from '../../../interfaces/app-state';
import { HttpService } from '../../../services/http/http.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Content } from '../../../ui/interfaces/modal';
import { TCModalService } from '../../../ui/services/modal/modal.service';
import { IUser } from '../../../ui/interfaces/user';

@Component({
  selector: 'page-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PagePaymentsComponent extends BasePageComponent implements OnInit, OnDestroy {
  payments: any[];
  paymentForm: FormGroup;
  doctors: IUser[];

  constructor(
    store: Store<IAppState>,
    httpSv: HttpService,
    private modal: TCModalService,
    private formBuilder: FormBuilder
  ) {
    super(store, httpSv);

    this.pageData = {
      title: 'Payments',
      breadcrumbs: [
        {
          title: 'Medicine',
          route: 'default-dashboard'
        },
        {
          title: 'Payments'
        }
      ]
    };
    this.payments = [];
    this.doctors = [];
  }

  ngOnInit() {
    super.ngOnInit();

    this.getData('assets/data/payments.json', 'payments', 'setLoaded');
    this.getData('assets/data/doctors.json', 'doctors');
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }

  // open modal window
  openModal<T>(body: Content<T>, header: Content<T> = null, footer: Content<T> = null, options: any = null) {
    this.initPaymentForm();

    this.modal.open({
      body: body,
      header: header,
      footer: footer,
      options: options
    });
  }

  // close modal window
  closeModal() {
    this.modal.close();
    this.paymentForm.reset();
  }

  // init form
  initPaymentForm() {
    this.paymentForm = this.formBuilder.group({
      billNo: ['', Validators.required],
      billDate: ['', Validators.required],
      patient: ['', Validators.required],
      doctor: ['', Validators.required],
      charges: ['', Validators.required],
      tax: ['', Validators.required],
      discount: ['', Validators.required],
      total: ['', Validators.required]
    });
  }

  // add new payment
  addPayment(form: FormGroup) {
    if (form.valid) {
      this.payments.unshift(form.value);
      let newTableData = JSON.parse(JSON.stringify(this.payments));

      this.payments = newTableData;
      this.closeModal();
    }
  }
}

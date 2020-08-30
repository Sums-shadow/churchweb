import { Component, OnDestroy, OnInit, TemplateRef, ViewChild } from '@angular/core';

import { Store } from '@ngrx/store';
import dayGridPlugin from '@fullcalendar/daygrid';
import { FullCalendarComponent } from '@fullcalendar/angular';

import { BasePageComponent } from '../../../base-page';
import { IAppState } from '../../../../interfaces/app-state';
import { HttpService } from '../../../../services/http/http.service';
import { TCModalService } from '../../../../ui/services/modal/modal.service';
import { Content } from '../../../../ui/interfaces/modal';

@Component({
  selector: 'page-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class PageCalendarComponent extends BasePageComponent implements OnInit, OnDestroy {
  @ViewChild('calendar', { static: true }) calendarComponent: FullCalendarComponent;
  @ViewChild('modalBody', { static: true }) modalBodyTpl: TemplateRef<any>;
  @ViewChild('modalFooter', { static: true }) modalFooterTpl: TemplateRef<any>;
  headerOptions: any;
  calendarEvents: any[];
  eventBody: any;
  calendarPlugins: any[];

  constructor(
    store: Store<IAppState>,
    httpSv: HttpService,
    private modal: TCModalService
  ) {
    super(store, httpSv);

    this.pageData = {
      title: 'Events calendar',
      loaded: true,
      breadcrumbs: [
        {
          title: 'Apps',
          route: 'default-dashboard'
        },
        {
          title: 'Service pages',
          route: 'default-dashboard'
        },
        {
          title: 'Events calendar'
        }
      ]
    };
    this.calendarEvents = [
      {
        title: 'Appointment',
        color: '#9d709a',
        start: this.setDate(0),
        end: this.setDate(0, 1),
        desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
      },
      {
        title: 'Appointment',
        color: '#349d68',
        start: this.setDate(0, 2),
        end: this.setDate(0, 3),
        desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
      },
      {
        title: 'Appointment',
        start: this.setDate(1, -1),
        end: this.setDate(1, 3),
        desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
      },
      {
        title: 'Appointment',
        color: '#ed5564',
        start: this.setDate(1),
        end: this.setDate(1, 3),
        desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
      },
      {
        title: 'Appointment',
        color: '#ed9661',
        start: this.setDate(1, -3),
        end: this.setDate(1, -2),
        desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
      },
      {
        title: 'Appointment',
        color: '#64B5F6',
        textColor: '#000',
        start: this.setDate(3, -5),
        end: this.setDate(4),
        desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
      },
      {
        title: 'Appointment',
        color: '#b7ce63',
        textColor: '#000',
        start: this.setDate(5, 10),
        end: this.setDate(6),
        desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
      },
      {
        title: 'Appointment',
        color: '#e9e165',
        textColor: '#000',
        start: this.setDate(10, 4),
        end: this.setDate(11, 2),
        desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
      },
      {
        title: 'Appointment',
        start: this.setDate(11, 5),
        end: this.setDate(14),
        desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
      },
      {
        title: 'Appointment',
        color: '#1f2022',
        textColor: '#fff',
        start: this.setDate(20, 7),
        end: this.setDate(20, 8),
        desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
      }
    ];
    this.calendarPlugins = [dayGridPlugin];
  }

  ngOnInit() {
    super.ngOnInit();

    this.headerOptions = {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,dayGridWeek,dayGridDay'
    };
    this.setLoaded();
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }

  setDate(day: number, hour: number = 0) {
    let date = new Date();

    date.setDate(date.getDate() + day);
    date.setHours(date.getHours() + hour);

    return date;
  }

  dateFormat(date: any) {
    return date.toString().slice(4, 21);
  }

  eventClick(data: any) {
    this.eventBody = {
      title: data.event.title,
      color: data.event.backgroundColor,
      from: this.dateFormat(data.event.start),
      to:  this.dateFormat(data.event.end),
      desc: data.event.extendedProps.desc
    };
    this.openModal(this.modalBodyTpl, null, this.modalFooterTpl)
  }

  // open modal window
  openModal<T>(body: Content<T>, header: Content<T> = null, footer: Content<T> = null, options: any = null) {
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
    this.eventBody = {};
  }
}

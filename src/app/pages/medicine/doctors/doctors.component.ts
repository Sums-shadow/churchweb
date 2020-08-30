import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { Store } from '@ngrx/store';
import { BasePageComponent } from '../../base-page';
import { IUser } from '../../../ui/interfaces/user';
import { IAppState } from '../../../interfaces/app-state';
import { HttpService } from '../../../services/http/http.service';
import { Content } from '../../../ui/interfaces/modal';
import { TCModalService } from '../../../ui/services/modal/modal.service';
import { IOption } from '../../../ui/interfaces/option';

@Component({
  selector: 'page-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.scss']
})
export class PageDoctorsComponent extends BasePageComponent implements OnInit, OnDestroy {
  doctors: IUser[];
  doctorForm: FormGroup;
  gender: IOption[];
  currentAvatar: string | ArrayBuffer;
  defaultAvatar: string;
  specialists: string[];

  constructor(
    store: Store<IAppState>,
    httpSv: HttpService,
    private modal: TCModalService,
    private formBuilder: FormBuilder
  ) {
    super(store, httpSv);

    this.pageData = {
      title: 'Doctors',
      breadcrumbs: [
        {
          title: 'Medicine',
          route: 'default-dashboard'
        },
        {
          title: 'Doctors'
        }
      ]
    };
    this.doctors = [];
    this.gender = [
      {
        label: 'Male',
        value: 'male'
      },
      {
        label: 'Female',
        value: 'female'
      }
    ];
    this.defaultAvatar = 'assets/content/anonymous-400.jpg';
    this.currentAvatar = this.defaultAvatar;
    this.specialists = [];
  }

  ngOnInit() {
    super.ngOnInit();

    this.getData('assets/data/doctors.json', 'doctors', 'setLoaded');
    this.getData('assets/data/doctors-specialists.json', 'specialists');
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }

  // open modal window
  openModal<T>(body: Content<T>, header: Content<T> = null, footer: Content<T> = null, options: any = null) {
    this.initDoctorForm();

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
    this.doctorForm.reset();
    this.currentAvatar = this.defaultAvatar;
  }

  // upload new file
  onFileChanged(inputValue: any) {
    let file: File = inputValue.target.files[0];
    let reader: FileReader = new FileReader();

    reader.onloadend = () => {
      this.currentAvatar = reader.result;
    };

    reader.readAsDataURL(file);
  }

  // add new doctor
  addDoctor(form: FormGroup) {
    if (form.valid) {
      delete form.value.lastName;
      delete form.value.gender;

      let newDoctor: IUser = form.value;

      newDoctor.img = this.currentAvatar;
      newDoctor.name = `Dr. ${newDoctor.name}`;
      newDoctor.profileLink = 'doctor-profile';

      this.doctors.unshift(newDoctor);

      this.closeModal();
    }
  }

  // init form
  initDoctorForm() {
    this.doctorForm = this.formBuilder.group({
      img: [],
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      role: ['', Validators.required],
      address: ['', Validators.required],
      gender: ['', Validators.required],
      social: new FormArray([
        this.doctorSocial('icofont-instagram', '#'),
        this.doctorSocial('icofont-facebook', '#'),
        this.doctorSocial('icofont-twitter', '#')
      ])
    });
  }

  // init doctor social
  doctorSocial(icon: string, link: string) {
    return new FormGroup({
      icon: new FormControl(icon, Validators.required),
      link: new FormControl(link, Validators.required)
    });
  }

  // add social control
  addControl(controls: any, iconInput: any, linkInput: any) {
    if (iconInput.value && linkInput.value) {
      controls.push(
        this.doctorSocial(iconInput.value, linkInput.value)
      );
      iconInput.value = '';
      linkInput.value = '';
    }
  }

  // remove social control
  removeControl(controls: any, index: number) {
    controls.removeAt(index);
  }
}

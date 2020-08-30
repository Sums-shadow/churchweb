import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'page-500',
  templateUrl: './page-500.component.html',
  styleUrls: ['./page-500.component.scss']
})
export class Page500Component implements OnInit {
  constructor(
    @Inject(DOCUMENT) private document: Document
  ) { }

  ngOnInit() {
    this.document.body.classList.add('page-500');
  }

  ngOnDestroy() {
    this.document.body.classList.remove('page-500');
  }
}

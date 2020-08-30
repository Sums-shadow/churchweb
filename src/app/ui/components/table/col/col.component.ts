import { Component, ContentChild, HostBinding, Input, OnInit, TemplateRef } from '@angular/core';
import { TCTableComponent } from '../table.component';
import { TCDropdownButtonComponent } from '../../dropdown';

@Component({
  selector: 'tc-table-col',
  templateUrl: './col.component.html',
  styleUrls: ['./col.component.scss']
})
export class TCTableColComponent implements OnInit {
  @ContentChild('tableTDTemplate', { static: true }) tdTemplate: TemplateRef<any>;
  @ContentChild('headerBodyTemplate', { static: true }) headerTemplate: TemplateRef<any>;

  @Input() columnTitle: string;
  @Input() columnName: string;
  @Input() enableFiltering: boolean;
  @Input() enableSorting: boolean;

  config: any;

  constructor(private table: TCTableComponent) {
    this.enableFiltering = false;
    this.enableSorting = false;
    this.columnName = '';
    this.columnTitle = '';

    this.config = {
      title: '',
      name: '',
      sort: '',
      enableSorting: this.enableSorting,
      filter: this.enableFiltering,
      filtering: {
        filterString: '',
        columnName: name
      }
    };
  }

  ngOnInit() {
    this.setConfig();
    this.table.addColumn(this);
  }

  setConfig() {
    this.config.name = this.columnName;
    this.config.title = this.columnTitle;
    this.config.filtering.columnName = this.columnName;
    this.config.enableSorting = this.enableSorting;

    if (this.columnName === '') {
      this.config.filtering = false;
    }
  }
}

import { Widget } from '../widget.interface';
import { WIDGET } from '../widget.token';
import { Component, ContentChild, OnInit } from '@angular/core';

@Component({
  selector: 'app-widget-wrapper',
  templateUrl: './widget-wrapper.component.html',
  styleUrls: ['./widget-wrapper.component.scss'],
})
export class WidgetWrapperComponent implements OnInit {
  @ContentChild(WIDGET as any, { static: true })
  widget: Widget;

  constructor() {}

  ngOnInit(): void {
    this.widget.load();
  }

  onRefresh() {
    this.widget.refresh();
  }
}

import { WIDGET } from './../widget.token';
import { Widget } from './../widget.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.scss'],
  providers: [
    {
      provide: WIDGET,
      useExisting: WeatherWidgetComponent,
    },
  ],
})
export class WeatherWidgetComponent implements OnInit, Widget {
  isLoading: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  load() {
    console.log('Load data from API...');
  }

  refresh() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  }
}

import { Routes, RouterModule } from '@angular/router';
import { WidgetWrapperComponent } from './widgets/widget-wrapper/widget-wrapper.component';
import { NgModule } from '@angular/core';

import { VelocityWidgetComponent } from './widgets/velocity-widget/velocity-widget.component';
import { WeatherWidgetComponent } from './widgets/weather-widget/weather-widget.component';
import { WidgetListComponent } from './widget-list/widget-list.component';
import { ShareModule } from '../share/share.module';

const routes: Routes = [
  {
    path: '',
    component: WidgetListComponent,
  },
];

@NgModule({
  declarations: [
    WidgetWrapperComponent,
    VelocityWidgetComponent,
    WeatherWidgetComponent,
    WidgetListComponent,
  ],
  imports: [ShareModule, RouterModule.forChild(routes)],
  exports: [
    WidgetWrapperComponent,
    VelocityWidgetComponent,
    WeatherWidgetComponent,
  ],
})
export class PatternExampleModule {}

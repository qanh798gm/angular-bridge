import { SecondGrandChildComponent } from './first-child/second-grand-child/second-grand-child.component';
import { FirstGrandChildComponent } from './first-child/first-grand-child/first-grand-child.component';
import { SecondChildComponent } from './second-child/second-child.component';
import { FirstChildComponent } from './first-child/first-child.component';
import { ParentComponent } from './parent.component';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ParentComponent,
  },
];

@NgModule({
  declarations: [
    ParentComponent,
    FirstChildComponent,
    SecondChildComponent,
    FirstGrandChildComponent,
    SecondGrandChildComponent,
  ],
  imports: [RouterModule.forChild(routes)],
  exports: [],
})
export class ChageDetectionModule {}

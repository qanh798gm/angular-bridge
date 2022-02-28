import { ShareModule } from './../share/share.module';
import { CustomFormFieldControlComponent } from './custom-form-field-control/custom-form-field-control.component';
import { NgModule } from '@angular/core';
import { SearchFormFieldContainerComponent } from './search-form-field-container/search-form-field-container.component';

import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: SearchFormFieldContainerComponent,
  },
];

@NgModule({
  declarations: [
    CustomFormFieldControlComponent,
    SearchFormFieldContainerComponent,
  ],
  imports: [ShareModule, RouterModule.forChild(routes)],
  exports: [CustomFormFieldControlComponent, SearchFormFieldContainerComponent],
})
export class AdvancedSearchControlModule {}

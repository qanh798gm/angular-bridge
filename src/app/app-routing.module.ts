import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'search',
    loadChildren: () =>
      import(
        './components/advanced-search-control/advanced-search-control.module'
      ).then((m) => m.AdvancedSearchControlModule),
  },
  {
    path: 'widget',
    loadChildren: () =>
      import('./components/pattern-example/pattern-example.module').then(
        (m) => m.PatternExampleModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

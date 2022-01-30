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
  {
    path: 'change-detection',
    loadChildren: () =>
      import('./components/parent/change-detection.module').then(
        (m) => m.ChageDetectionModule
      ),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'search',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { MainPageComponent } from './modules/core/components/main-page/main-page.component';
import { ErrorComponent } from './modules/core/components/error/error.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    pathMatch: 'full'
  },
  {
    path: 'error-page',
    component: ErrorComponent,
    pathMatch: 'full'
  },
  {
    path: 'contacts-list',
    loadChildren: '../app/modules/contacts/contacts.module#ContactsModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

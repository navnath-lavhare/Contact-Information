import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  
  {
    path: 'AddContact',
    loadChildren: () => import("./modules/add-contact/add-contact.module").then(m => m.AddContactModule)
  },
  {
    path: 'ContactsList',
    loadChildren: () => import("./modules/contacts-list/contacts-list.module").then(m=>m.ContactsListModule)
  },
  {
    path: 'EditContact/:id',
    loadChildren: () => import("./modules/edit-contact/edit-contact.module").then(m=>m.EditContactModule)
  },
  {
    path: 'not-found',
    component: PageNotFoundComponent
  },
  {
    path: "**",
    redirectTo: '/not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

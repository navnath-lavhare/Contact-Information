import { AddContactComponent } from './add-contact.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AddContactService } from './add-contact.service';
import { CommonModuleModule } from 'src/app/common-module/common-module.module';


@NgModule({
    imports: [
      CommonModule,
      RouterModule.forChild([
        {path: '', pathMatch: 'full', component: AddContactComponent}
      ]),
      ReactiveFormsModule, 
      FormsModule,
      CommonModuleModule
    ],
    providers: [AddContactService],
    declarations: [AddContactComponent]
  })
  export class AddContactModule { }
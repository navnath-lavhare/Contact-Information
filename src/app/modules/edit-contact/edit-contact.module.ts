
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EditContactComponent } from './edit-contact.component';
import { EditContactService } from './edit-contact.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
    imports: [
      CommonModule,
      RouterModule.forChild([
        {path: '', pathMatch: 'full', component: EditContactComponent}
      ]),
      ReactiveFormsModule, 
      FormsModule,
    ],
    providers:[EditContactService],
    declarations: [ EditContactComponent
    ]
  })
  export class EditContactModule { }
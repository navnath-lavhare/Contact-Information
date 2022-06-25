
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContactsListComponent } from './contacts-list.component';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import { MenuItem } from 'primeng/api'; 
import {TableModule} from 'primeng/table';
//import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DropdownModule} from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { ContactListService } from './contact-list.service';
import { CommonModuleModule } from 'src/app/common-module/common-module.module';


@NgModule({
    imports: [
      CommonModule,
      RouterModule.forChild([
        {path: '', pathMatch: 'full', component: ContactsListComponent}
      ]),
      AccordionModule,
      TableModule,
      //BrowserAnimationsModule,
      DropdownModule,
      FormsModule,
      CommonModuleModule
    ],
    providers:[ContactListService],
    declarations: [ ContactsListComponent
    ]
  })
  export class ContactsListModule { }
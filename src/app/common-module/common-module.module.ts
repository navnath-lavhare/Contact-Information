import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonPopupComponent } from './common-popup/common-popup.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { CommonMultiselectComponent } from './common-multiselect/common-multiselect.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [CommonPopupComponent, CommonMultiselectComponent],
  imports: [
    CommonModule,
    NgMultiSelectDropDownModule.forRoot(),
    FormsModule
  ],
  entryComponents: [CommonPopupComponent],
  exports: [CommonPopupComponent,CommonMultiselectComponent]
})
export class CommonModuleModule { }

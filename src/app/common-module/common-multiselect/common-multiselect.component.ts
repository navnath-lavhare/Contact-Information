import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
@Component({
  selector: 'app-common-multiselect',
  templateUrl: './common-multiselect.component.html',
  styleUrls: ['./common-multiselect.component.css']
})
export class CommonMultiselectComponent implements OnInit {

  @Input() dropdownList: any;
  @Input() selectedItems: any = [];
  @Output() onItemSelects = new EventEmitter<any>();
  dropdownSettings = {};
  ngOnInit() {
    
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }
  onItemSelect(item: any) {
    let temp = this.dropdownList.filter((obj) => obj.item_id === item.item_id)[0];
    if(temp){
      this.selectedItems.push(temp);
    }
    this.onItemSelects.emit({data: this.selectedItems});
  }
  onSelectAll(items: any) {
    console.log(items);
  }

}

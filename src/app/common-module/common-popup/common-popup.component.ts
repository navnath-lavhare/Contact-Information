import { Component, OnInit } from '@angular/core';
//import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-common-popup',
  templateUrl: './common-popup.component.html',
  styleUrls: ['./common-popup.component.css']
})
export class CommonPopupComponent implements OnInit {

  constructor(
    //public modalRef: MdbModalRef<CommonPopupComponent>
    ) { }

  ngOnInit() {
  }
  clsoe(){
    //his.modalRef.close();
  }
}

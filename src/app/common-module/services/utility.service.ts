import { Injectable } from '@angular/core';
import { messageStore } from './messageStore';
@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor() { }
  getMessage(modulekEY, dataKey, paramsDisplay?: any){
    let value = messageStore[modulekEY][dataKey];
    if(value){
      if(value.includes('{placeholder}')){
        if(paramsDisplay){
          paramsDisplay.forEach(element => {
            value = value.replace('{placeHolder}', element);
          });
        }
        return value.replace(new RegExp('{placeHolder}', 'g'), '');
      }
      return value;
    }
    return 'key not found in message Store';
  }
}

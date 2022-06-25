import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
@Injectable()
export class AddContactService {
    constructor(private http: HttpClient){

    }

    createContact(contact) {
        return this.http.post(environment.apiUrl+"contacts", contact);
        
    }

}
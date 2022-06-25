import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';

@Injectable()
export class ContactListService {
    constructor(private http: HttpClient){

    }

    getContacts() {
        return this.http.get(environment.apiUrl+"contacts");
    }
    deleteContact(id) {
        return this.http.delete(environment.apiUrl+"contacts/"+id);
    }
}
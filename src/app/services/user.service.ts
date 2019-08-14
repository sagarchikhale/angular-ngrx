import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { IUserHttp } from '../models/user-http.interface';

@Injectable()
export class UserService {
    usersUrl = `${environment.apiUrl}user.json`;

    constructor(private _http: HttpClient) {}

    getUsers(): Observable<IUserHttp> {
        return this._http.get<IUserHttp>(this.usersUrl);
    }
}

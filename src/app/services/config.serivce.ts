import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IConfig } from '../models/user.interface';
import { Observable } from 'rxjs';

@Injectable()
export class ConfigService {
    configUrl = `${environment.apiUrl}config.json`;

    constructor(private _http: HttpClient) { }

    getConfig(): Observable<IConfig> {
        return this._http.get<IConfig>(this.configUrl);
    }
}



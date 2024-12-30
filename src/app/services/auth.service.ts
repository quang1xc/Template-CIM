import {Injectable} from '@angular/core';
// import {environment} from '@environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';

// Models
import {IUserInfo} from '../models/user-info.interface';
import {IResponseData} from '../models/response-data.interface';
import {IAccount} from '../models/account.interface';
import {EStorageKey} from '../constants/storage-key.enum';
// Services
import {StorageService} from './storage.service';
@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private readonly API_URL = 'https://apigw.cashplus.vn';

    constructor(
        private httpClient: HttpClient,
        private storageService: StorageService,
        private router: Router
    ) {}

  login(username: string | undefined, password: string | undefined): Observable<IResponseData<IAccount>> {
        const url = this.API_URL + '/api/auth/adminLogin';
        return this.httpClient.post<IResponseData<IAccount>>(url, {username, password});
    }

    logout() {
        const url = this.API_URL + '/api/auth/logout';
        this.httpClient.post<IResponseData<any>>(url, {}).subscribe(res => {
            console.log('logout: ', res);
            if (res.code === '200') {
                this.storageService.clear();
                this.router.navigate(['/']);
            }
        });
    }
}

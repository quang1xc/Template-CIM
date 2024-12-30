import { Injectable, InjectionToken } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { IUserInfo} from '../models/user-info.interface';

// Create the injection token for the custom settings
export const TLA_CONFIG = new InjectionToken('tlaCustomConfig');

@Injectable({
    providedIn: 'root'
})
export class ConfigService
{
    _configSubject = new Subject<string>();
    loadingSubject = new Subject<string>();
}

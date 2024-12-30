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
    partnerBranchId = new BehaviorSubject<number>(-1);
    showSidebar = new BehaviorSubject<boolean>(true);

    userInfo = new BehaviorSubject<IUserInfo | null>(null);
    showPartnerBranches = new BehaviorSubject<boolean>(false);
    isPartner = new BehaviorSubject<boolean>(false);



    selectPartnerBranch(partnerBranchId: number) {
        this.partnerBranchId.next(partnerBranchId);
    }

    toggleShowSideBar() {
        this.showSidebar.next(!this.showSidebar.value);
    }


}

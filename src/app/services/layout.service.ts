import {Injectable} from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  private isHideSidebar = new BehaviorSubject<{status: boolean}>({ status: false });
  statusSidebar = this.isHideSidebar.asObservable();
  onHideSidebar(){
    this.isHideSidebar.next({ status: !this.isHideSidebar.value.status });
  }
}

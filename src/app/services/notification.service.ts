import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private messageSource = new BehaviorSubject<{ message: string; status: string } | null>(null);
  currentMessage = this.messageSource.asObservable();

  show(message: string, isSuccess: string) {
    this.messageSource.next({ message, status: isSuccess });
    setTimeout(() => {
      this.clear();
    }, 3000);
  }

  clear() {
    this.messageSource.next(null);
  }
}

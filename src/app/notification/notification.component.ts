import {Component, OnInit, signal} from '@angular/core';
import {NgClass} from '@angular/common';
import {NotificationService} from '../services/notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: 'notification.component.html',
  imports: [
    NgClass
  ],
  styleUrls: ['notification.component.css']
})
export class NotificationComponent implements OnInit {
  message: string | null = null;
  status = signal('');

  constructor(private notificationService: NotificationService) {
  }

  ngOnInit() {
    this.notificationService.currentMessage.subscribe((data) => {
      if (data) {
        this.message = data.message;
        this.status.set(data.status);
      } else {
        this.message = null;
      }
    });
  }

  close() {
    this.notificationService.clear();
  }
}

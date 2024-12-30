import {Component, Inject, OnInit, signal} from '@angular/core';
import {RouterLink} from '@angular/router';
import {StorageService} from '../../services/storage.service';


@Component({
    selector: 'app-header',
    standalone: true,
  imports: [],
    templateUrl: './header.template.html',
    styleUrls: [],

})
export class HeaderTemplate implements OnInit {
  username = signal('');
  constructor(    private storageService: StorageService,
  ) {
  }
  ngOnInit() {
    const usernameLocal = JSON.stringify(this.storageService.getItem('username'));
    if (usernameLocal) {
      this.username.set(usernameLocal);
    }
  }
}

import {Component, Inject, OnInit, signal} from '@angular/core';
import {Router, RouterLink} from '@angular/router';
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
                  private router: Router,
  ) {
  }
  ngOnInit() {
    const usernameLocal = JSON.parse(JSON.stringify(this.storageService.getItem('username')));
    this.username.update(() => (usernameLocal ? usernameLocal : 'Tên mặc định'));
  }

  logout(){
    this.storageService.clear();
    this.router.navigate(['/']);
  }
}

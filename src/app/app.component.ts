import {Component, inject, OnInit, signal, ViewChild} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router, RouterModule} from '@angular/router';
//rxjs
import {filter} from 'rxjs';
// Services

// Components
import {HeaderTemplate} from './layouts/header/header.template';
import {SidebarTemplate} from './layouts/sidebar/sidebar';
import {NotificationComponent} from './notification/notification.component';
import {NotificationService} from './services/notification.service';
import {AuthGuard} from './common/auth.guard';
//toast

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,
    HeaderTemplate,
    SidebarTemplate,
    NotificationComponent,
    // Components
  ],
  templateUrl: './app.component.html',
  providers: [AuthGuard],
  styleUrls: [],

})
export class AppComponent implements OnInit {
  private readonly activatedRoute = inject(ActivatedRoute);
  @ViewChild('notification') notification!: NotificationComponent;

  showHeader = signal(false)
  showSidebar = signal(false)
  showLogin = signal(false)

  constructor(private route: ActivatedRoute,
              private router: Router,
              private notificationService: NotificationService) {
  }

  ngOnInit(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(async () => {
        let currentRoute = this.activatedRoute;
        while (currentRoute.firstChild) {
          currentRoute = currentRoute.firstChild;
        }

        currentRoute.data.subscribe(data => {
          console.log(data['showHeader'])
          this.showHeader.set(data['showHeader']);
          this.showSidebar.set(data['showSidebar']);
          this.showLogin.set(data['showLogin']);
        });
      })

  }



}

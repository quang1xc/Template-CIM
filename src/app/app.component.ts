import {Component, inject, OnInit, signal, ViewChild} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router, RouterModule} from '@angular/router';
//rxjs
import {filter} from 'rxjs';
// Services

// Components
import {HeaderTemplate} from './layouts/header/header.template';
import {SidebarTemplate} from './layouts/sidebar/sidebar';
import {AuthGuard} from './common/auth.guard';
import {LayoutService} from './services/layout.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,
    SidebarTemplate,
    HeaderTemplate,
  ],
  templateUrl: './app.component.html',
  providers: [AuthGuard],
  styleUrls: [],
})
export class AppComponent implements OnInit {
  private readonly activatedRoute = inject(ActivatedRoute);

  showHeader = signal(false)
  showSidebar = signal(false)
  showLogin = signal(false)
  isShowSidebar = signal(false);

  constructor(private router: Router,
              private layoutService: LayoutService,) {
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

    this.layoutService.statusSidebar.subscribe((data) => {
      if (data) {
        console.log(data);
        this.isShowSidebar.update(()=>data.status);
      } else {
        this.isShowSidebar.set(false);
      }
    });

  }


}

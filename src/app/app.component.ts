import {Component, OnInit, signal} from '@angular/core';
import {ActivatedRoute, RouterModule} from '@angular/router';
import {HeaderTemplate} from './layouts/header/header.template';
import {SidebarTemplate} from './layouts/sidebar/sidebar';
import {LoginComponent} from './auth/login/login.component';
// Services

// Components

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,
    HeaderTemplate,
    SidebarTemplate,
    LoginComponent,
    // Components
  ],
  templateUrl: './app.component.html',
  styleUrls: [],

})
export class AppComponent implements OnInit {
 showHeader = signal(false)
 showSidebar = signal(false)
 showLogin = signal(false)
  constructor(private route: ActivatedRoute){
    // this.route.data.subscribe((data) => {
    //   console.log(data)
    //   this.showHeader.set(data['showHeader']);
    //   this.showSidebar.set(data['showSidebar']);
    //   this.showLogin.set(data['showLogin']);
    // });
  }
  ngOnInit(): void {

  }


}

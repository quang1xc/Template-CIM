import {Component, OnInit, signal} from '@angular/core';
import {ActivatedRoute, RouterModule} from '@angular/router';
import {HeaderTemplate} from './layouts/header/header.template';
import {SidebarTemplate} from './layouts/sidebar/sidebar';
// Services

// Components

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,
    HeaderTemplate,
    SidebarTemplate
    // Components
  ],
  templateUrl: './app.component.html',
  styleUrls: [],

})
export class AppComponent implements OnInit {
 showHeader = signal(false)
  constructor(private route: ActivatedRoute){
    this.route.data.subscribe((data) => {
      this.showHeader.set(data['showHeader']);
    });
  }
  ngOnInit(): void {

  }








}

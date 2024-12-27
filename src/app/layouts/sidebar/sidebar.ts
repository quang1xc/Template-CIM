import {Component} from '@angular/core';
import {RouterModule} from '@angular/router';


@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule
  ],
  templateUrl: './sidebar.html',
  styleUrls: ['./sidebar.scss',
    '../../assets/css/animate.min.css',
    '../../assets/css/style.min.css',
    '../../assets/css/theme/default.css',
    '../../assets/plugins/icon/themify-icons/themify-icons.css',],

})
export class SidebarTemplate {
}

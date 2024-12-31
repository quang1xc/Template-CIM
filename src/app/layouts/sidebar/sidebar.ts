import {Component, Input, OnInit, signal, WritableSignal} from '@angular/core';
import {RouterModule} from '@angular/router';
import {NgClass} from '@angular/common';
import {LayoutService} from '../../services/layout.service';
import { trigger, style, transition, animate } from '@angular/animations';


@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule
  ],
  templateUrl: './sidebar.html',
  styleUrls: ['./sidebar.scss'],
  animations: [
    trigger('sidebarAnimation', [
      transition(':enter', [
        style({ width: '4vw', opacity: 0 }),
        animate('800ms ease-in-out', style({ width: '15vw', opacity: 1 }))
      ]),
      transition(':leave', [
        animate('800ms ease-in-out', style({ width: '4vw', opacity: 0 }))
      ])
    ])
  ]

})
export class SidebarTemplate implements OnInit {
  @Input() isShowSidebar!: WritableSignal<boolean>;
  constructor(private layoutService: LayoutService) {
  }
  ngOnInit() {}
  onHideSidebar(){
    this.layoutService.onHideSidebar();
  }
}

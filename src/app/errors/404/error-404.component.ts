import { Component, ViewEncapsulation } from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-error-404',
  templateUrl: './error-404.component.html',
  styleUrls: ['./error-404.component.scss'],
  imports: [
    RouterLink
  ]
})
export class Error404Component {
    /**
     * Constructor
     */
    constructor() {
    }
}

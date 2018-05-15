import { Component } from '@angular/core';
import {  BlockUI, NgBlockUI } from 'ng-block-ui';

import { BlockTemplateComponent } from './block-template.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @BlockUI() blockUI: NgBlockUI;
  blockTemplate = BlockTemplateComponent;
  blockMessage;

  toggleBlocking(message: string) {
     this.blockUI.start(message);

   setTimeout(() => {
      this.blockUI.stop();
    }, 3500);
  }
}

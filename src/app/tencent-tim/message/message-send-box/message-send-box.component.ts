import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message-send-box',
  templateUrl: './message-send-box.component.html',
  styleUrls: ['./message-send-box.component.less']
})
export class MessageSendBoxComponent implements OnInit {
  active: boolean;
  constructor() { }

  ngOnInit(): void {
  }

  onfocus(event: any) {
    console.log('cccccD',event);
  }
}

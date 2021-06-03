import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Conversation } from '../../im.type';
import { currentConversationSelector } from '../../store/selectors';
import TIM from 'tim-js-sdk';

@Component({
  selector: 'app-conversation-profile',
  templateUrl: './conversation-profile.component.html',
  styleUrls: ['./conversation-profile.component.less']
})
export class ConversationProfileComponent implements OnInit, OnDestroy {
  TIM = TIM;
  currentConversation: Conversation;
  subscription: Subscription;

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
    this.subscription = this.store.select(currentConversationSelector)
      .subscribe(res => {
        this.currentConversation = res;
      });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}

import { Component, OnInit, OnDestroy, ChangeDetectorRef, Output, EventEmitter, Inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Conversation } from 'tim-js-sdk';
import { CONVERSATION_TYPE, NG_Tim_CONFIG } from '../shared.data';
import { currentConversationSelector } from '../store/selectors';
import { NgTimConfig } from '../type';

@Component({
  selector: 'lib-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.less']
})
export class TitleComponent implements OnInit, OnDestroy {
  currentConversation: Conversation;
  subscription: Subscription;

  @Output() detailBtnClick = new EventEmitter<void>();
  @Output() minimizeClick = new EventEmitter<void>();

  constructor(
    private store: Store,
    @Inject(NG_Tim_CONFIG) public config: NgTimConfig,
  ) { }

  ngOnInit(): void {

    this.subscription = this.store.select(currentConversationSelector).subscribe((res: Conversation) => {
      this.currentConversation = res;
    });
  }

  get detailIsHidden() {
    const none = JSON.stringify(this.currentConversation) === '{}';
    return none || (!none && this.currentConversation?.conversationID.includes('SYSTEM'));
  }

  get name() {
    switch (this.currentConversation?.type) {
      case CONVERSATION_TYPE.client:
        return this.currentConversation.userProfile.nick || this.currentConversation.userProfile.userID;

      case CONVERSATION_TYPE.group:
        return this.currentConversation.groupProfile.name;

      case CONVERSATION_TYPE.system:
        return '系统通知';

      default:
        return null;
    }
  }

  handleClick(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    this.detailBtnClick.emit();
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}

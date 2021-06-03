import { Component, OnInit, ChangeDetectionStrategy, OnDestroy, ChangeDetectorRef, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Conversation } from '../im.type';
import { CONVERSATION_TYPE } from '../shared.data';
import { currentConversationSelector } from '../store/selectors';

@Component({
  selector: 'lib-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TitleComponent implements OnInit, OnDestroy {
  name: string;
  currentConversation: Conversation;
  subscription: Subscription;

  @Output() detailBtnClick = new EventEmitter<void>();

  constructor(
    private store: Store,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.subscription = this.store.select(currentConversationSelector).subscribe((res: Conversation) => {
      this.currentConversation = res;
      switch (res?.type) {
        case CONVERSATION_TYPE.client:
          this.name = res.userProfile.nick;
          break;
        case CONVERSATION_TYPE.group:
          this.name = res.groupProfile.name;
          break;
        case CONVERSATION_TYPE.system:
          this.name = '系统通知';
          break;
        default:
          this.name = null;
          break;
      }

      this.cd.markForCheck();

    });
  }

  get detailIsHidden() {
    const none = JSON.stringify(this.currentConversation) === '{}';
    return none || (!none && this.currentConversation?.conversationID.includes('SYSTEM'));
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

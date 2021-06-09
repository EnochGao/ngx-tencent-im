import { EventEmitter, Injectable } from '@angular/core';

@Injectable()
export class ReEditMessageService {
  reEditMessage: EventEmitter<string> = new EventEmitter<string>();

}

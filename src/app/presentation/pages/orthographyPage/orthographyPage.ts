import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  ChatMessage,
  MyMessages,
  TextMessageBox,
  TextMessageBoxFile,
  TextMessageEvent,
  TypingLoader,
} from '@components/index';

@Component({
  selector: 'app-orthography-page',
  imports: [
    CommonModule,
    ChatMessage,
    MyMessages,
    TypingLoader,
    TextMessageBox,
    TextMessageBoxFile,
  ],
  templateUrl: './orthographyPage.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class OrthographyPage {
  handleMessageWhitFile({ prompt, file }: TextMessageEvent) {
    console.log({ prompt, file });
  }
}

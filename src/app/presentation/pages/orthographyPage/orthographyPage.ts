import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {
  ChatMessage,
  MyMessages,
  TextMessageBox,
  TextMessageBoxEvent,
  TextMessageBoxFile,
  TextMessageBoxSelect,
  TextMessageEvent,
  TypingLoader,
} from '@components/index';
import { IMessage } from '@interfaces/index';

@Component({
  selector: 'app-orthography-page',
  imports: [
    CommonModule,
    ChatMessage,
    MyMessages,
    TypingLoader,
    TextMessageBox,
    TextMessageBoxFile,
    TextMessageBoxSelect,
  ],
  templateUrl: './orthographyPage.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class OrthographyPage {
  public messages = signal<IMessage[]>([{ text: 'Hola mundo', isGpt: false }]);
  public isLoading = signal<boolean>(false);

  handleMessage(prompt: string) {
    console.log({ prompt });
  }

  handleMessageWhitFile({ prompt, file }: TextMessageEvent) {
    console.log({ prompt, file });
  }

  handleMessageWhitSelect({ prompt, selectedOption }: TextMessageBoxEvent) {
    console.log({ prompt, selectedOption });
  }
}

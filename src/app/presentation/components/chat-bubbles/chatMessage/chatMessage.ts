import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  input,
} from '@angular/core';

@Component({
  selector: 'app-chat-message',
  imports: [CommonModule],
  templateUrl: './chatMessage.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatMessage {
  @Input({ required: true }) text: string = '';
}

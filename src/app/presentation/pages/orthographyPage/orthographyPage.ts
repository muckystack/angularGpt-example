import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ChatMessage, MyMessages } from '@components/index';

@Component({
  selector: 'app-orthography-page',
  imports: [CommonModule, ChatMessage, MyMessages],
  templateUrl: './orthographyPage.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class OrthographyPage {
  
}

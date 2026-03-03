import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-my-messages',
  imports: [CommonModule],
  templateUrl: './myMessages.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MyMessages {
  @Input({ required: true }) text!: string;
}

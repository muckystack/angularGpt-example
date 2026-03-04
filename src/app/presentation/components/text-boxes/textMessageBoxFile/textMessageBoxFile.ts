import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  inject,
  Input,
  Output,
} from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

export interface TextMessageEvent {
  prompt?: string | null;
  file: File;
}

@Component({
  selector: 'app-text-message-box-file',
  imports: [ReactiveFormsModule],
  templateUrl: './textMessageBoxFile.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextMessageBoxFile {
  @Input() public placeholder: string = '';
  @Output() onMessage = new EventEmitter<TextMessageEvent>();

  public fb = inject(FormBuilder);
  public form = this.fb.group({
    prompt: [],
    file: [null, Validators.required],
  });
  public file: File | undefined;

  handleSelectedFile(event: Event) {
    const target = event.target as HTMLInputElement;
    const file: any = target.files?.[0];

    this.form.controls.file.setValue(file);
    console.log(file);

    this.file = file;
  }

  handleSubmit() {
    if (this.form.invalid) return;

    const { prompt, file } = this.form.value;

    this.onMessage.emit({ prompt, file: file! });
    this.form.reset();
  }
}

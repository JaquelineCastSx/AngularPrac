import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pretty-text',
  templateUrl: './pretty-text.component.html',
  styleUrls: ['./pretty-text.component.scss']
})
export class PrettyTextComponent {
  @Input() titulo: string = '';
}

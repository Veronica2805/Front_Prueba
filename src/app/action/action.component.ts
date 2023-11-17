import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrl: './action.component.css'
})

export class ActionComponent {
  @Input() text: string = '';

  @Output() onClick = new EventEmitter<void>();

  handleClick() {
    this.onClick.emit();
  }
}

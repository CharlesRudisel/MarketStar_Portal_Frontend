import { Component , Input , Output , EventEmitter } from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-reusable-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reusable-card.component.html',
  styleUrl: './reusable-card.component.css'
})
export class ReusableCardComponent {
  @Input() clientName!: string;
  @Input() blogTopic!: string;
  @Input() dueDate!: string | null;
  @Input() status!: string;
  @Input() buttonText!: string;
  @Output() buttonClick = new EventEmitter<void>();

  onButtonClick(){
    this.buttonClick.emit();
  }


}

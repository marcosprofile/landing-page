import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() class: string = ''
  @Input() titulo: string = ''
  @Input() descricao: string = ''
  @Input() url: string = ''
}

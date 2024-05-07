import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-grid-cards',
  standalone: true,
  imports: [],
  templateUrl: './grid-cards.component.html',
  styleUrl: './grid-cards.component.css'
})
export class GridCardsComponent {
  @Input() grid: string = ''
}

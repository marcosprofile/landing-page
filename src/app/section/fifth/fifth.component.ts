import { Component } from '@angular/core';
import { ContainerComponent } from '../../components/container/container.component';
import { GridCardsComponent } from '../../components/grid-cards/grid-cards.component';
import { CardComponent } from '../../components/card/card.component';
import { TextoDestaqueComponent } from '../../components/texto-destaque/texto-destaque.component';

@Component({
  selector: 'app-fifth',
  standalone: true,
  imports: [
    ContainerComponent,
    GridCardsComponent,
    CardComponent,
    TextoDestaqueComponent
  ],
  templateUrl: './fifth.component.html',
  styleUrl: './fifth.component.css'
})
export class FifthComponent {

}

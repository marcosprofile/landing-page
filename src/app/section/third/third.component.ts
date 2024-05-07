import { Component } from '@angular/core';
import { ContainerComponent } from '../../components/container/container.component';
import { GridCardsComponent } from '../../components/grid-cards/grid-cards.component';
import { CardComponent } from '../../components/card/card.component';
import { TextoDestaqueComponent } from '../../components/texto-destaque/texto-destaque.component';

@Component({
  selector: 'app-third',
  standalone: true,
  imports: [
    ContainerComponent,
    GridCardsComponent,
    CardComponent,
    TextoDestaqueComponent
  ],
  templateUrl: './third.component.html',
  styleUrl: './third.component.css'
})
export class ThirdComponent {

}

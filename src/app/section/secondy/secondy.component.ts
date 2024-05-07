import { Component } from '@angular/core';

// Components
import { ContainerComponent } from '../../components/container/container.component';
import { GridCardsComponent } from '../../components/grid-cards/grid-cards.component';
import { CardComponent } from '../../components/card/card.component';
import { TextoDestaqueComponent } from '../../components/texto-destaque/texto-destaque.component';


@Component({
  selector: 'app-secondy',
  standalone: true,
  imports: [
  ContainerComponent,
    GridCardsComponent,
    CardComponent,
    TextoDestaqueComponent
  ],
  templateUrl: './secondy.component.html',
  styleUrl: './secondy.component.css'
})
export class SecondyComponent {

}

import { Component } from '@angular/core';
import { ContainerComponent } from '../../components/container/container.component';
import { ButtonComponent } from '../../components/button/button.component';

@Component({
  selector: 'app-sixth',
  standalone: true,
  imports: [
    ContainerComponent,
    ButtonComponent
  ],
  templateUrl: './sixth.component.html',
  styleUrl: './sixth.component.css'
})
export class SixthComponent {

}

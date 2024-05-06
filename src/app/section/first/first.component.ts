import { Component } from '@angular/core';
import { ContainerComponent } from '../../components/container/container.component';
import { ButtonComponent } from '../../components/button/button.component';

@Component({
  selector: 'app-first',
  standalone: true,
  imports: [ ContainerComponent, ButtonComponent ],
  templateUrl: './first.component.html',
  styleUrl: './first.component.css'
})
export class FirstComponent {

}

import { Component } from '@angular/core';
import { ContainerComponent } from '../../components/container/container.component';

@Component({
  selector: 'app-secondy',
  standalone: true,
  imports: [ ContainerComponent ],
  templateUrl: './secondy.component.html',
  styleUrl: './secondy.component.css'
})
export class SecondyComponent {

}

import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { SliderComponent } from '../slider/slider.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ ButtonComponent, SliderComponent ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}

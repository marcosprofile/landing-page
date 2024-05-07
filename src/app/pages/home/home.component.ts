import { Component } from '@angular/core';

// Components
import { HeaderComponent } from '../../components/header/header.component';

// Sections
import { FirstComponent } from '../../section/first/first.component';
import { SecondyComponent } from '../../section/secondy/secondy.component';
import { ThirdComponent } from '../../section/third/third.component';
import { FourthComponent } from '../../section/fourth/fourth.component';
import { FifthComponent } from '../../section/fifth/fifth.component';
import { SixthComponent } from '../../section/sixth/sixth.component';
import { SeventhComponent } from '../../section/seventh/seventh.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    FirstComponent,
    SecondyComponent,
    ThirdComponent,
    FourthComponent,
    FifthComponent,
    SixthComponent,
    SeventhComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

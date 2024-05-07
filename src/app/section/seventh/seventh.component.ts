import { Component } from '@angular/core';
import { ContainerComponent } from '../../components/container/container.component';
import { LinkComponent } from '../../components/link/link.component';
import { SocialLinkComponent } from '../../components/social-link/social-link.component';

@Component({
  selector: 'app-seventh',
  standalone: true,
  imports: [
    ContainerComponent,
    LinkComponent,
    SocialLinkComponent
  ],
  templateUrl: './seventh.component.html',
  styleUrl: './seventh.component.css'
})
export class SeventhComponent {

}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-texto-destaque',
  standalone: true,
  imports: [],
  templateUrl: './texto-destaque.component.html',
  styleUrl: './texto-destaque.component.css'
})
export class TextoDestaqueComponent {
  @Input() tag: string = ''
  @Input() titulo: string = ''
  @Input() subtitulo: string = ''
  @Input() class: string = ''
}

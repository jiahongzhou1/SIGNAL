import { Component, signal  } from '@angular/core';
import { InputComponent } from './input/input.component';
@Component({
  selector: 'app-in-mod-container',
  standalone: true,
  imports: [],
  templateUrl: './in-mod-container.component.html',
  styleUrl: './in-mod-container.component.css'
})
export class InModContainerComponent {
  nome = signal<string>("jiahong");
  cognome = signal<string>("zhou");
  eta = signal<number>(17);
}

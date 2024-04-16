import { Component, effect, signal } from '@angular/core';
import { SignalComponent } from '../signal/signal.component';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-effects',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './effects.component.html',
  styleUrl: './effects.component.css'
})
export class EffectsComponent extends SignalComponent{
  constructor(){
    super();
    effect(()=> {
      console.log("Valori di Count e Calculate , ", this.count() , this.calculate())
    })
  }
}

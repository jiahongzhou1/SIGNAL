import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-signal',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.css'
})
export class SignalComponent {


  count = signal<number>(0);
  calculate = signal<boolean>(false);
  doubleCount = computed<number>(() => 
    this.count() * 2
  )

  conditionalCalculated = computed<number>(() => {
    if(this.calculate()){
      return this.count() * 5;
    }
    return -1;
  })

  Incrementa(){
    this.count.update((oldValue) => oldValue + 1)
  }

  resetCount(){
    this.count.set(0)
  }
}

import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-array',
  standalone: true,
  imports: [],
  templateUrl: './array.component.html',
  styleUrl: './array.component.css'
})
export class ArrayComponent {
 names = signal<string[]>([]);
 addName( input : string){
    this.names.update((oldArray) =>  [...oldArray ,input] );
 }

 deleteName(index : number){
    this.names.update((oldArray)=>{
      oldArray.splice(index,1)
      return oldArray;
    })
 }
}

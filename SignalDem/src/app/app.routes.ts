import { Routes } from '@angular/router';
import { SignalComponent } from './signal/signal.component';
import { EffectsComponent } from './effects/effects.component';
import { ArrayComponent } from './array/array.component';

export const routes: Routes = [
    {path: 'signal', component: SignalComponent},
    {path:'effect' , component:EffectsComponent},
    {path:'Array' , component:ArrayComponent},
];

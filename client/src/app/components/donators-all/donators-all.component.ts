import { Component } from '@angular/core';
import { DonatorsComponent } from '../donators/donators.component';
import { DonatorsEditComponent } from '../donators-edit/donators-edit.component';

@Component({
  selector: 'app-donators-all',
  standalone: true,
  imports: [DonatorsComponent,DonatorsEditComponent],
  templateUrl: './donators-all.component.html',
  styleUrl: './donators-all.component.css'
})
export class DonatorsAllComponent {
  selectedIndex:number=-1;
}

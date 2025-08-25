import { Component, inject } from '@angular/core';
import { GiftComponent } from "../gift/gift.component";
import { GiftsEditComponent } from "../gifts-edit/gifts-edit.component";



@Component({
  selector: 'app-gitfs-all',
  standalone: true,
  imports: [GiftComponent, GiftsEditComponent],
  templateUrl: './gitfs-all.component.html',
  styleUrl: './gitfs-all.component.css'
})
export class GitfsAllComponent {
selectedIndex:number=-1;

}

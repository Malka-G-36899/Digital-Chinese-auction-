import { Component } from '@angular/core';
import { UsersComponent } from "../users/users.component";
import { UsersEditComponent } from "../users-edit/users-edit.component";

@Component({
  selector: 'app-users-all',
  standalone: true,
  imports: [UsersComponent, UsersEditComponent],
  templateUrl: './users-all.component.html',
  styleUrl: './users-all.component.css'
})
export class UsersAllComponent {
  selectedIndex:number=-1;
}

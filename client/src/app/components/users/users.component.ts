import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { User } from '../../models/user.model';
import { UsersService } from '../../service/users.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  userList = inject(UsersService);
  users: User[] = this.userList.usersList;
  @Input()
  selectedIndex!: number;
  @Output()
  selectedIndexChange: EventEmitter<number> = new EventEmitter<number>();
  flag:number=-1;
  selectedId!: number;
  showAddComponent: boolean = false;
  setSelected(i: number,id:number) {
    this.selectedId=id
    this.selectedIndex = i;
    this.flag = this.selectedIndex;
  }

  ngOnChanges() {
    this.userList.get().subscribe(data=>this.users =data );
  }

  edit() {
    this.selectedIndexChange.emit(this.selectedIndex);
    this.flag = -1;
  }
  cancel() {
    this.userList.delete(this.selectedId).subscribe(
      data=>this.userList.refresh()
    );
  }
  insert() {
    this.selectedIndexChange.emit(this.users.length);
  }


 
}

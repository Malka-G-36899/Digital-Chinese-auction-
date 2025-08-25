import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { UsersService } from '../../service/users.service';
import { User } from '../../models/user.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-users-edit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './users-edit.component.html',
  styleUrl: './users-edit.component.css'
})
export class UsersEditComponent {
//with server
usersSrv: UsersService= inject(UsersService);
list$ = this.usersSrv.getAll();
isAdd:boolean=false
usersList: User[] = [];
@Input()
selectedIndex!: number;
@Output()
selectedIndexChange: EventEmitter<number> = new EventEmitter<number>();
user: User = new User();
isadd: boolean = false;

ngOnChanges() {
  this.usersSrv.list$.subscribe(data => {
    if (this.selectedIndex == data.length) {
      this.isAdd = true;
      this.user.id = data[this.selectedIndex-1].id + 1
    }
    else this.user = data[this.selectedIndex];
  })

}

save(){ 
 if (this.isAdd)
   {this.usersSrv.add(this.user).subscribe(data=>{
         this.usersSrv.refresh()
         this.selectedIndexChange.emit(-1);
   });}
else 
{this.usersSrv.update(this.user).subscribe(data=>{
this.usersSrv.refresh()
this.selectedIndexChange.emit(-1);
});}
  
}
   
cancel() {
  this.selectedIndexChange.emit(-1);
}
}

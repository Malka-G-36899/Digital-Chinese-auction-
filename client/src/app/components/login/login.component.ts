import { Component, inject } from '@angular/core';
import { User } from '../../models/user.model';
import { FormsModule } from '@angular/forms';
import { Gift } from '../../models/gift.model';
import { ActivatedRoute, Router } from '@angular/router';
import { PresentsService } from '../../service/presents.service';
import { UsersService } from '../../service/users.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  giftList = inject(PresentsService);
  gifts: Gift[] = this.giftList.giftsList;
  router: Router = inject(Router);
  activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  userService = inject(UsersService);
  user: User = new User();
  userGifts:number[]=[];

  ngOnInit() {
    this.giftList.getAll();
    this.userGifts = this.userService.userGift;
    this.giftList.get().subscribe(data => this.gifts = data);
  }

  continue() {
    //if(this.user.name.length>0&&this.user.id==9&&this.user.phone.length==10){
      this.userService.add(this.user).subscribe(data => {
      this.userService.refresh();
    });
    for (let i = 0; i < this.giftList.giftsList.length; i++) {
      if (this.userService.userGift[i] > 0){
        for (let j = this.userService.userGift[i]; j > 0; j--){
          this.giftList.giftsList[i].users.push(this.user.id);}
          this.giftList.update(this.giftList.giftsList[i]).subscribe();}
    }
  // }
}
}
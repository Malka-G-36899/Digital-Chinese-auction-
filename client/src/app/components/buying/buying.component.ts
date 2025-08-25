import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { PresentsService } from '../../service/presents.service';
import { Gift } from '../../models/gift.model';
import { GiftsEditComponent } from "../gifts-edit/gifts-edit.component";
import { CommonModule } from '@angular/common';
import { PayingComponent } from "../paying/paying.component";
import { ActivatedRoute, Router } from '@angular/router';
import { Reactive } from '@angular/core/primitives/signals';
import { UsersService } from '../../service/users.service';


@Component({
  selector: 'app-gift',
  standalone: true,
  imports: [GiftsEditComponent, CommonModule, PayingComponent],
  templateUrl: './buying.component.html',
  styleUrl: './buying.component.css'
})
export class BuyingComponent {
////////////////////////changes
gifts: Gift[] = [];

constructor(private presentsService: PresentsService) {
  this.presentsService.gifts$.subscribe(data => {
    this.gifts = data; // עדכון הרשימה כאשר יש שינוי
  });
}


/////////////////////////////////
  @Input()
  selectedIndex!: number;
  @Output()
  selectedIndexChange: EventEmitter<number> = new EventEmitter<number>();
  flag: number = -1;
  selectedId!: number;
  showAddComponent: boolean = false;
  count: number = 0;

  userService = inject(UsersService);
  userGifts = new Array<number>;
  router: Router = inject(Router);
  activerouter: ActivatedRoute = inject(ActivatedRoute);
  sum: number = 0;
  winner: number = 0;
  giftList = inject(PresentsService);
  //gifts: Gift[] = this.giftList.giftsList;
  ran: number = 0;
  ngOnInit() {
    this.giftList.get().subscribe(data => this.gifts = data);
    this.userGifts = new Array<number>(this.gifts.length);
    this.giftList.get().subscribe(data => this.gifts = data);
    this.userGifts = [this.gifts.length];
    this.userGifts[0] = 0;
    this.userGifts[1] = 0;
    this.userGifts[2] = 0;
    this.userGifts[3] = 0;
    this.userGifts[4] = 0;
  }

  setSelected(i: number, id: number) {
    this.selectedId = id
    this.selectedIndex = i;
    this.flag = this.selectedIndex;
  }
  ngOnChanges() {
    this.giftList.get().subscribe(data => this.gifts = data);

  }
  plus(i: number) {
    this.userGifts[i]++;
    this.sum += this.gifts[i].price;
  }
  minus(i: number) {
    if (this.userGifts[i] > 0)
      this.userGifts[i]--;
    this.sum -= this.gifts[i].price;
  }

  pay() {
    this.userService.userGift = this.userGifts;
    this.router.navigate(['/paying/' + this.sum], { relativeTo: this.activerouter })
  }
  //origional//////
  rand() {
    for (let index = 0; index < this.gifts.length; index++) {
      this.ran = Math.floor(Math.random() * (this.gifts[index].users.length));
      if (this.ran == 0)
        this.ran = Math.floor(Math.random() * (this.gifts[index].users.length));
      //alert("index " + index + "ran " + this.ran);
      this.gifts[index].winner = this.gifts[index].users[this.ran];
      //alert(this.gifts[index].winner + " win");
      //subscribe...
      this.giftList.update(this.gifts[index]).subscribe(() =>
        this.giftList.getAll()
      )
    } }
  //new code
  // rand() {
  //   const updatePromises = this.gifts.map((gift, index) => {
  //     this.ran = Math.floor(Math.random() * gift.users.length);
  //     if (this.ran === 0) {
  //       this.ran = Math.floor(Math.random() * gift.users.length);
  //     }
  //     gift.winner = gift.users[this.ran];
  
  //     // עדכון המתנה
  //     return this.presentsService.update(gift).toPromise();
  //   });
  
  //   Promise.all(updatePromises).catch(error => {
  //     console.error("Error updating gifts: ", error);
  //   });
  // }


}






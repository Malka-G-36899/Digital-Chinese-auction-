import { Component, inject } from '@angular/core';
import { PresentsService } from '../../service/presents.service';
import { Gift } from '../../models/gift.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-random',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './random.component.html',
  styleUrl: './random.component.css'
})
export class RandomComponent {

winner:string='';
giftList = inject(PresentsService);
gifts: Gift[] = this.giftList.giftsList;
ran:number=0;

ngOnInit(){
  this.giftList.get().subscribe(data => this.gifts = data);
}

rand(){
  for (let index = 0; index < this.gifts.length; index++) {
   this.ran=Math.floor(Math.random()*(this.gifts[index].users.length));
    alert(this.ran);
    this.winner=this.gifts[index].users[this.ran].toString();
    alert("winner "+this.winner)
  }
}

}

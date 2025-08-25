import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Gift } from '../../models/gift.model';
import { GiftsEditComponent } from "../gifts-edit/gifts-edit.component";
import { CommonModule } from '@angular/common';
import { PresentsService } from '../../service/presents.service';
@Component({
  selector: 'app-gift',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gift.component.html',
  styleUrl: './gift.component.css'
})
export class GiftComponent {
[x: string]: any;

  giftList = inject(PresentsService);
  gifts: Gift[] = this.giftList.giftsList;
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
    this.giftList.get().subscribe(data=>this.gifts =data );
  }

  edit() {
    this.selectedIndexChange.emit(this.selectedIndex);
    this.flag = -1;
  }
  cancel() {
    this.giftList.delete(this.selectedId).subscribe(
      data=>this.giftList.refresh()
    );
  }
  insert() {
    this.selectedIndexChange.emit(this.gifts.length);
  }
}

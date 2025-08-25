import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { FormsModule, FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Gift } from '../../models/gift.model';
import { CommonModule } from '@angular/common';
import { PresentsService } from '../../service/presents.service';
import { Donator } from '../../models/donator.model';
import { DonatorsService } from '../../service/donators.service';


@Component({
  selector: 'app-gifts-edit',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './gifts-edit.component.html',
  styleUrl: './gifts-edit.component.css'
})
export class GiftsEditComponent {
  
//validations
frmGift!: FormGroup;
  //with server
  presentsSrv: PresentsService = inject(PresentsService);
  list$ = this.presentsSrv.getAll();
  isAdd: boolean = false
  //
  giftsList: Gift[] = [];
  @Input()
  selectedIndex!: number;
  @Output()
  selectedIndexChange: EventEmitter<number> = new EventEmitter<number>();
  donatorList = inject(DonatorsService);
  donators: Donator[] = this.donatorList.donatorssList;

  gift: Gift = new Gift();
  isadd: boolean = false;


  ngOnInit() {
    this.frmGift = new FormGroup({
      // id:new FormControl('',Validators.required, Validators.pattern(new RegExp('[א-ת]'))
      name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
      price: new FormControl('', [Validators.required]),
      //cost: new FormControl(10, [Validators.required, Validators.min(1), Validators.maxLength(3)])

    }/*,[]*/)

  }

  ngOnChanges() {
    this.presentsSrv.list$.subscribe(data => {
      if (this.selectedIndex == data.length) {
        this.isAdd = true;
        this.gift.id = data[this.selectedIndex - 1].id + 1
      }
      else this.gift = data[this.selectedIndex];
    })
  }

  save() {
    if (this.isAdd) {
      this.presentsSrv.add(this.gift).subscribe(data => {
        this.presentsSrv.refresh()
        this.selectedIndexChange.emit(-1);
      });
    }
    else {
      this.presentsSrv.update(this.gift).subscribe(data => {
        this.presentsSrv.refresh()
        this.selectedIndexChange.emit(-1);
      });
    }

  }
  cancel() {
    this.selectedIndexChange.emit(-1);
  }

  check(name: string) {
    console.log(name)
    this.gift.name = name
  }


}

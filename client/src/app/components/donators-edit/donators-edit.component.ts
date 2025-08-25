import { Component, EventEmitter, inject, Input, OnChanges, Output } from '@angular/core';
import { DonatorsService } from '../../service/donators.service';
import { Donator } from '../../models/donator.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-donators-edit',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './donators-edit.component.html',
  styleUrl: './donators-edit.component.css'
})
export class DonatorsEditComponent {
 //with server
 donatorsSrv: DonatorsService= inject(DonatorsService);
 list$ = this.donatorsSrv.getAll();
 isAdd:boolean=false

 frmDonator!: FormGroup;
 donatorsList: Donator[] = [];
 @Input()
 selectedIndex!: number;
 @Output()
 selectedIndexChange: EventEmitter<number> = new EventEmitter<number>();
 donator: Donator = new Donator();
 isadd: boolean = false;

 ngOnInit() {
  this.frmDonator = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    id: new FormControl('', [Validators.required]),
    code: new FormControl('', [Validators.required])
   
  }/*,[]*/)

}

 ngOnChanges() {
   this.donatorsSrv.list$.subscribe(data => {
     if (this.selectedIndex == data.length) {
       this.isAdd = true;
       this.donator.code = data[this.selectedIndex-1].code + 1
     }
     else this.donator = data[this.selectedIndex];
   })

 }

//  save(){ 
//    if (this.isAdd)
//      {
//            this.donatorsSrv.add(this.donator).subscribe(data=>{
//            this.donatorsSrv.refresh()
//            this.selectedIndexChange.emit(-1);
//      });}
// else 
// {this.donatorsSrv.update(this.donator).subscribe(data=>{
// this.donatorsSrv.refresh()
// this.selectedIndexChange.emit(-1);
// });}}
save(){ 
  if (this.isAdd)
    {this.donatorsSrv.add(this.donator).subscribe(data=>{
          this.donatorsSrv.refresh()
          this.selectedIndexChange.emit(-1);
    });}
else 
{this.donatorsSrv.update(this.donator).subscribe(data=>{
this.donatorsSrv.refresh()
this.selectedIndexChange.emit(-1);
});}
   
 }
    
 cancel() {
   this.selectedIndexChange.emit(-1);
 }
}

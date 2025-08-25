import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { DonatorsService } from '../../service/donators.service';
import { Donator } from '../../models/donator.model';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-donators',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './donators.component.html',
  styleUrl: './donators.component.css'
})
export class DonatorsComponent {
  donatorList = inject(DonatorsService);
  donators: Donator[] = this.donatorList.donatorssList;
  @Input()
  selectedIndex!: number;
  @Output()
  selectedIndexChange: EventEmitter<number> = new EventEmitter<number>();
  flag:number=-1;
  selectedId!: number;
  showAddComponent: boolean = false;
  setSelected(i: number,code:number) {
    this.selectedId=code
    this.selectedIndex = i;
    this.flag = this.selectedIndex;
  }
ngOnInit(){
  this.donatorList.get().subscribe(data=>this.donators =data );

}
  ngOnChanges() {

    this.donatorList.get().subscribe(data=>this.donators =data );
  }

  edit() {
    this.selectedIndexChange.emit(this.selectedIndex);
    this.flag = -1;
  }
  cancel() {
    this.donatorList.delete(this.selectedId).subscribe(
      data=>this.donatorList.refresh()
    );
  }
  insert() {
    this.selectedIndexChange.emit(this.donators.length);
  }
}

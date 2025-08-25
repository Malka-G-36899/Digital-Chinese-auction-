import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-paying',
  standalone: true,
  imports: [],
  templateUrl: './paying.component.html',
  styleUrl: './paying.component.css'
})
export class PayingComponent {
  activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  sum:number=0;
  router: Router = inject(Router);
  activerouter:ActivatedRoute=inject(ActivatedRoute);
  ngOnInit(){
    this.activatedRoute.params.subscribe(params => { 
        this.sum = params['sum'];
    });
}
cancel(){
  this.router.navigate(['../buying'])
}
config(){
  this.router.navigate(['../login'])
}
}


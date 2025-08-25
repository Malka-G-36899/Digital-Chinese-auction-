import { Routes } from '@angular/router';
import { GiftComponent } from './components/gift/gift.component';
import { DonatorsComponent } from './components/donators/donators.component';
import { PayingComponent } from './components/paying/paying.component';
import { BuyingComponent } from './components/buying/buying.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { GitfsAllComponent } from './components/gitfs-all/gitfs-all.component';
import { DonatorsAllComponent } from './components/donators-all/donators-all.component';
import { LoginComponent } from './components/login/login.component';
import { UsersEditComponent } from './components/users-edit/users-edit.component';

export const routes: Routes = [

    {path:'', redirectTo:'home', pathMatch:'full'},
    {path:'home', component:HomeComponent},
    {path:'users-edit', component:UsersEditComponent},
    {path:'gifts', component:GitfsAllComponent},
    {path:'donators', component:DonatorsAllComponent},
    {path:'paying/:sum', component:PayingComponent},
    {path:'buying', component:BuyingComponent},
    {path:'login', component:LoginComponent},
    {path:'**', component:NotFoundComponent},

];

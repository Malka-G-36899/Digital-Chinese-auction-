import { Component } from '@angular/core';
import {  RouterLink, RouterLinkActive,RouterOutlet } from '@angular/router';
import { GiftComponent } from "./components/gift/gift.component";
import { GitfsAllComponent } from "./components/gitfs-all/gitfs-all.component";
import { DonatorsComponent } from './components/donators/donators.component';
import { LoginComponent } from "./components/login/login.component";
import { DonatorsAllComponent } from './components/donators-all/donators-all.component';
import { DonatorsEditComponent } from "./components/donators-edit/donators-edit.component";
import { UsersComponent } from "./components/users/users.component";
import { UsersAllComponent } from "./components/users-all/users-all.component";
import { RandomComponent } from "./components/random/random.component";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, DonatorsAllComponent, GiftComponent, GitfsAllComponent, DonatorsComponent, LoginComponent, DonatorsEditComponent, UsersComponent, UsersAllComponent, RandomComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'empty-project';
}

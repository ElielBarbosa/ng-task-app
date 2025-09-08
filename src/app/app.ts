import { Component, signal } from '@angular/core';
import { RouterOutlet, Routes } from '@angular/router';
import { Home } from './features/home/home';

const routes: Routes = [
  {
    path: '',
    component: Home,
  },
];

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home],
  template: `<app-home></app-home> <router-outlet></router-outlet>`,
})
export class App {}

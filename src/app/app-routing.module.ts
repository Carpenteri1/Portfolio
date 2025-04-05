import { Routes } from '@angular/router';
import { MainComponent } from './component/maincompontent/main.component';
import { Component } from '@angular/core';

Component({
  selector: 'router-outlet',
})
export const routes: Routes = [

  { path: '', component: MainComponent }
];
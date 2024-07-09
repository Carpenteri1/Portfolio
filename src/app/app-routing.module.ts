import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainCompontent } from './component/maincompontent/main.component';
const routes: Routes = 
[
  { path: "", component: MainCompontent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
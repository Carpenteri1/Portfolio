import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './pagecomponents/aboutpage/aboutpage.component';
import { ContactPageComponent } from './pagecomponents//contactpage/contactpage.component';
import { PortfolioComponent } from './pagecomponents/portfoliopage/portfoliopage.component';
import { ReferenserPageComponent } from './pagecomponents/referenserpage/referenserpage.component';
import { StartPageComponent } from './pagecomponents/startpage/startpage.component';
const routes: Routes = 
[
  { path: "", component: StartPageComponent },
  { path: "About", component: AboutPageComponent },
  { path: "Portfolio", component: PortfolioComponent},
  { path: "Contact", component: ContactPageComponent},
  { path: "References", component: ReferenserPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AboutPageComponent } from './pagecomponents/aboutpage/aboutpage.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/headercomponent/header.component';
import { PageContentComponent } from './component/pagecontentcomponent/pagecontent.component';
import { PortfolioComponent } from './pagecomponents/portfoliopage/portfoliopage.component';
import {StartPageComponent} from './pagecomponents/startpage/startpage.component'
import {FormsModule} from '@angular/forms';
import { CarouselComponent } from './component/carouselcomponent/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    StartPageComponent,
    AboutPageComponent,
    PortfolioComponent,
    HeaderComponent,
    PageContentComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,  
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
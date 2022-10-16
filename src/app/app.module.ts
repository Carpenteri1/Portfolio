
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { HeaderComponent } from './component/headercomponent/header.component';
import { FooterComponent } from './component/footercomponent/footer.component';
import { PortfolioComponent } from './pagecomponents/portfoliopage/portfoliopage.component';
import { StartPageComponent} from './pagecomponents/startpage/startpage.component'
import { AboutPageComponent } from './pagecomponents/aboutpage/aboutpage.component';
import { CarouselComponent } from './component/carouselcomponent/carousel.component';
import { ReferenserPageComponent } from './pagecomponents/referenserpage/referenserpage.component';
import { TestPageComponent } from './pagecomponents/testpage/testpage.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    StartPageComponent,
    AboutPageComponent,
    PortfolioComponent,
    CarouselComponent,
    ReferenserPageComponent,
    TestPageComponent,
  ],
  imports: [
    BrowserModule,  
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    CommonModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
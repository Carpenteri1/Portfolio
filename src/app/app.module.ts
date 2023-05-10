import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './component/headercomponent/header.component';
import { FooterComponent } from './component/footercomponent/footer.component';
import { StartPageComponent} from './pagecomponents/startpage/startpage.component'
import { CarouselComponent } from './component/carouselcomponent/carousel.component';
import { TypewriterComponent } from './component/typewritercomponent/typewriter.component';
import { CardLayoutComponent } from './component/cardlayoutcomponent/cardlayout.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    StartPageComponent,
    CarouselComponent,
    TypewriterComponent,
    CardLayoutComponent
  ],
  imports: [
    BrowserModule,  
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
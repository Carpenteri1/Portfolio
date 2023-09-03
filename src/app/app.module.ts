import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './component/footercomponent/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StartPageComponent} from './pagecomponents/startpage/startpage.component'
import { CarouselComponent } from './component/carouselcomponent/carousel.component';
import { TypewriterComponent } from './component/typewritercomponent/typewriter.component';
import { CardLayoutComponent } from './component/cardlayoutcomponent/cardlayout.component';
import { AboutMeComponent } from './component/aboutmecomponent/aboutme.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    StartPageComponent,
    CarouselComponent,
    TypewriterComponent,
    CardLayoutComponent,
    AboutMeComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,  
    AppRoutingModule,
    FormsModule,
    CommonModule,
    BrowserAnimationsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './component/footercomponent/footer.component';
import { CarouselComponent } from './component/carouselcomponent/carousel.component';
import { TypewriterComponent } from './component/typewritercomponent/typewriter.component';
import { CardLayoutComponent } from './component/cardlayoutcomponent/cardlayout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainCompontent } from './component/maincompontent/main.component';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    TypewriterComponent,
    CardLayoutComponent,
    FooterComponent,
    MainCompontent
  ],
  imports: [
    BrowserModule,  
    AppRoutingModule,
    FormsModule,
    CommonModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
import { ViewEncapsulation, Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { StringHandler } from 'src/app/Utility/stringhandler';
import { TypewriterComponent } from '../typewritercomponent/typewriter.component';
import { CarouselComponent } from '../carouselcomponent/carousel.component';
import { CardLayoutComponent } from '../cardlayoutcomponent/cardlayout.component';
import { FooterComponent } from '../footercomponent/footer.component';
import { ScrollButtonComponent } from '../scrollbuttoncomponent/maincompontent/scrollbutton.component';

@Component({
  selector: 'main-component',
  encapsulation: ViewEncapsulation.None,
  templateUrl: 'main.component.html',
  styleUrls: ['main.component.css'],
  standalone: true,
  imports:[
    TypewriterComponent, 
    CarouselComponent, 
    CardLayoutComponent, 
    FooterComponent, 
    ScrollButtonComponent
  ]
})
export class MainComponent implements AfterViewInit {

  @ViewChild(StringHandler.sectionOne) sectionOne: ElementRef;
  @ViewChild(StringHandler.sectionTwo) sectionTwo: ElementRef;
  @ViewChild(StringHandler.sectionThree) sectionThree: ElementRef;
  @ViewChild(StringHandler.sectionFour) sectionFour: ElementRef;
  @ViewChild(StringHandler.jumpingArrow) jumpingArrow: ElementRef;

  sections: { [key: string]: ElementRef } = {};

  constructor() {
    this.sectionOne = new ElementRef(null);
    this.sectionTwo = new ElementRef(null);
    this.sectionThree = new ElementRef(null);
    this.sectionFour = new ElementRef(null);
    this.jumpingArrow = new ElementRef(null);
  }

  ngAfterViewInit() {
    this.sections = {
      1: this.sectionOne,
      2: this.sectionTwo,
      3: this.sectionThree,
      4: this.sectionFour,
      5: this.jumpingArrow
    };

    this.sections[1].nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
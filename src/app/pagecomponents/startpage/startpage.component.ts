import { ViewEncapsulation, Component, ElementRef, ViewChild } from '@angular/core';
import { elementAt } from 'rxjs';

@Component({
  selector: 'startpage-component',
  encapsulation: ViewEncapsulation.None,
  templateUrl: 'startpage.component.html',
  styleUrls: ['startpage.component.css']
})
export class StartPageComponent {

  @ViewChild('sectionOne', { static: false }) sectionOne: ElementRef;
  @ViewChild('sectionTwo', { static: false }) sectionTwo: ElementRef;
  @ViewChild('sectionThree', { static: false }) sectionThree: ElementRef;
  @ViewChild('sectionFour', { static: false }) sectionFour: ElementRef;
  @ViewChild('sectionFive', { static: false }) sectionFive: ElementRef;

  constructor(){
    this.sectionOne = new ElementRef(null);
    this.sectionTwo = new ElementRef(null);
    this.sectionThree = new ElementRef(null);
    this.sectionFour = new ElementRef(null);
    this.sectionFive = new ElementRef(null);
  }

  clickScroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth' });
  }

  onScroll(event: WheelEvent) {
    const deltaY = event.deltaY;
    if (deltaY > 0) {
      // Scrolling down
      if (this.sectionOne.nativeElement.getBoundingClientRect().bottom > 0) {
        this.scrollTo(this.sectionTwo);
      } else if (this.sectionTwo.nativeElement.getBoundingClientRect().bottom > 0) {
        this.scrollTo(this.sectionThree);
      }
      else if (this.sectionThree.nativeElement.getBoundingClientRect().bottom > 0) {
        this.scrollTo(this.sectionFour);
      }
      else if (this.sectionFour.nativeElement.getBoundingClientRect().bottom > 0) {
        this.scrollTo(this.sectionFive);
      }
    } else {
      // Scrolling up
      if (this.sectionThree.nativeElement.getBoundingClientRect().top < window.innerHeight) {
        this.scrollTo(this.sectionTwo);
      } else if (this.sectionTwo.nativeElement.getBoundingClientRect().top < window.innerHeight) {
        this.scrollTo(this.sectionOne);
      }
    }
  }
  
  scrollTo(element: ElementRef) {
    element.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
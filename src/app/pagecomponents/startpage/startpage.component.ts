import { ViewEncapsulation, Component, ElementRef, ViewChild } from '@angular/core';
import { elementAt } from 'rxjs';

@Component({
  selector: 'startpage-component',
  encapsulation: ViewEncapsulation.None,
  templateUrl: 'startpage.component.html',
  styleUrls: ['startpage.component.css']
})
export class StartPageComponent {

  private readonly sectionOneInput: string = "sectionOneInput";
  private readonly sectionTwoInput: string = "sectionTwoInput";
  private readonly sectionThreeInput: string = "sectionThreeInput";
  private readonly sectionFourInput: string = "sectionFourInput";
  private readonly sectionFiveInput: string = "sectionFiveInput";

  @ViewChild('sectionOne', { static: false }) sectionOne: ElementRef;
  @ViewChild('sectionTwo', { static: false }) sectionTwo: ElementRef;
  @ViewChild('sectionThree', { static: false }) sectionThree: ElementRef;
  @ViewChild('sectionFour', { static: false }) sectionFour: ElementRef;
  @ViewChild('sectionFive', { static: false }) sectionFive: ElementRef;

  constructor() {
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
    if (deltaY > 0) this.scrollDown();
    else if(deltaY < 0) this.scrollUp();
  }

  private scrollDown() {
    if (this.sectionOne.nativeElement.getBoundingClientRect().bottom > 0) {
      this.HandleScrollingEvent(this.sectionTwo,this.sectionOneInput,this.sectionTwoInput);
    } 
    else if (this.sectionTwo.nativeElement.getBoundingClientRect().bottom > 0) {
      this.HandleScrollingEvent(this.sectionThree,this.sectionTwoInput,this.sectionThreeInput);
    }
    else if (this.sectionThree.nativeElement.getBoundingClientRect().bottom > 0) {
      this.HandleScrollingEvent(this.sectionFour,this.sectionThreeInput,this.sectionFourInput);
    }/*TODO because section is mutch smaller then the other, our logic thinks that we are scrolling from section 4.
            We need to solve the code behinde somehow.
    else if (this.sectionFour.nativeElement.getBoundingClientRect().bottom > 0) {
      this.HandleScrollingEvent(this.sectionFive,this.sectionFourInput,this.sectionFiveInput);
    }*/
  }

  private scrollUp() {
    /* TODO because section is mutch smaller then the other, our logic thinks that we are scrolling from section 4.
            We need to solve the code behinde somehow.
    if (this.sectionFive.nativeElement.getBoundingClientRect().top < window.innerHeight) {
      this.HandleScrollingEvent(this.sectionFour,this.sectionFiveInput,this.sectionFourInput);
    }*/
    if (this.sectionFour.nativeElement.getBoundingClientRect().top < window.innerHeight) {
      this.HandleScrollingEvent(this.sectionThree,this.sectionFourInput,this.sectionThreeInput);
    }
    else if (this.sectionThree.nativeElement.getBoundingClientRect().top < window.innerHeight) {
      this.HandleScrollingEvent(this.sectionTwo,this.sectionThreeInput,this.sectionTwoInput);
    }
    else if (this.sectionTwo.nativeElement.getBoundingClientRect().top < window.innerHeight) {
      this.HandleScrollingEvent(this.sectionOne,this.sectionTwoInput,this.sectionOneInput);
    }
  }

  private HandleScrollingEvent(
    scrollToElement: ElementRef,
    elementIdOne: string,
    elementIdTwo: string)
    {
      setTimeout(() => 
      {
        this.scrollTo(scrollToElement);
        this.setInputToChecked(
        elementIdOne,
        elementIdTwo);
      },300);
  }
  scrollTo(element: ElementRef) {
      element.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  setInputToChecked(elementIdOne: string, elementIdTwo: string) {
    var element = <HTMLInputElement>document.getElementById(elementIdOne);
    element.checked = false;
    element = <HTMLInputElement>document.getElementById(elementIdTwo);
    element.checked = true;
  }
}
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
    else this.scrollUp();
  }
  private scrollUp() {
    if (this.sectionFive.nativeElement.getBoundingClientRect().top < window.innerHeight) {
      this.scrollTo(this.sectionFour);
      this.setInputToChecked(this.sectionFiveInput, this.sectionFourInput);
    }
    else if (this.sectionFour.nativeElement.getBoundingClientRect().top < window.innerHeight) {
      this.scrollTo(this.sectionThree);
      this.setInputToChecked(this.sectionFourInput, this.sectionThreeInput);
    }
    else if (this.sectionThree.nativeElement.getBoundingClientRect().top < window.innerHeight) {
      this.scrollTo(this.sectionTwo);
      this.setInputToChecked(this.sectionThreeInput, this.sectionTwoInput);
    }
    else if (this.sectionTwo.nativeElement.getBoundingClientRect().top < window.innerHeight) {
      this.scrollTo(this.sectionOne);
      this.setInputToChecked(this.sectionTwoInput, this.sectionOneInput);
    }
  }
  private scrollDown() {
    if (this.sectionOne.nativeElement.getBoundingClientRect().bottom > 0) {
      this.scrollTo(this.sectionTwo);
      this.setInputToChecked(this.sectionOneInput, this.sectionTwoInput);

    } else if (this.sectionTwo.nativeElement.getBoundingClientRect().bottom > 0) {
      this.scrollTo(this.sectionThree);
      this.setInputToChecked(this.sectionTwoInput, this.sectionThreeInput);
    }
    else if (this.sectionThree.nativeElement.getBoundingClientRect().bottom > 0) {
      this.scrollTo(this.sectionFour);
      this.setInputToChecked(this.sectionThreeInput, this.sectionFourInput);
    }
    else if (this.sectionFour.nativeElement.getBoundingClientRect().bottom > 0) {
      this.scrollTo(this.sectionFive);
      this.setInputToChecked(this.sectionFourInput, this.sectionFiveInput);
    }
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
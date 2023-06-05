import { ViewEncapsulation, Component, ElementRef, ViewChild } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'startpage-component',
  encapsulation: ViewEncapsulation.None,
  templateUrl: 'startpage.component.html',
  styleUrls: ['startpage.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({ opacity: 0 })),
      transition('void <=> *', animate(500)),
    ]),
  ],
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
    if (deltaY > 50) this.scrollDown();
    else if(deltaY < -90) this.scrollUp();
  }

  private async scrollDown() {
    if (this.sectionOne.nativeElement.getBoundingClientRect().bottom > 0) {
      await this.HandleScrollingEvent(this.sectionTwo,this.sectionOneInput,this.sectionTwoInput);
    } 
    else if (this.sectionTwo.nativeElement.getBoundingClientRect().bottom > 0) {
      await this.HandleScrollingEvent(this.sectionThree,this.sectionTwoInput,this.sectionThreeInput);
    }
    else if (this.sectionThree.nativeElement.getBoundingClientRect().bottom > 0) {
      await this.HandleScrollingEvent(this.sectionFour,this.sectionThreeInput,this.sectionFourInput);
    }
    else if (this.sectionFour.nativeElement.getBoundingClientRect().bottom > 0) {
      await this.HandleScrollingEvent(this.sectionFive,this.sectionFourInput,this.sectionFiveInput);
    }
  }

  private async scrollUp() {
      if (this.sectionFive.nativeElement.getBoundingClientRect().top < window.innerHeight) {
        await this.HandleScrollingEvent(this.sectionFour,this.sectionFiveInput,this.sectionFourInput);
      }
      else if (this.sectionFour.nativeElement.getBoundingClientRect().top < window.innerHeight) {
        await this.HandleScrollingEvent(this.sectionThree,this.sectionFourInput,this.sectionThreeInput);
      }
      else if (this.sectionThree.nativeElement.getBoundingClientRect().top < window.innerHeight) {
       await this.HandleScrollingEvent(this.sectionTwo,this.sectionThreeInput,this.sectionTwoInput);
      }
      else if (this.sectionTwo.nativeElement.getBoundingClientRect().top < window.innerHeight) {
        await this.HandleScrollingEvent(this.sectionOne,this.sectionTwoInput,this.sectionOneInput);
      }
  }

  private async HandleScrollingEvent(
    scrollToElement: ElementRef,
    elementIdOne: string,
    elementIdTwo: string)
    {
      scrollToElement.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      this.setInputToChecked(elementIdOne, elementIdTwo);
    }

  setInputToChecked(elementIdOne: string, elementIdTwo: string) {
    var element = <HTMLInputElement>document.getElementById(elementIdOne);
    element.checked = false;
    element = <HTMLInputElement>document.getElementById(elementIdTwo);
    element.checked = true;
  }
}
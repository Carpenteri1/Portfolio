import { ViewEncapsulation, Component, ElementRef, ViewChild, HostListener } from '@angular/core';
import { StringHandler } from 'src/app/Utility/stringhandler';

@Component({
  selector: 'startpage-component',
  encapsulation: ViewEncapsulation.None,
  templateUrl: 'startpage.component.html',
  styleUrls: ['startpage.component.css']
})
export class StartPageComponent {

  @ViewChild(StringHandler.sectionOne, { static: false }) sectionOne: ElementRef;
  @ViewChild(StringHandler.sectionTwo, { static: false }) sectionTwo: ElementRef;
  @ViewChild(StringHandler.sectionThree, { static: false }) sectionThree: ElementRef;
  @ViewChild(StringHandler.sectionFour, { static: false }) sectionFour: ElementRef;
  @ViewChild(StringHandler.sectionFive, { static: false }) sectionFive: ElementRef;
  section:number = 1;
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

  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if(event.key === 'ArrowUp' )
    {
      this.HandleCurrentSectionArrowUp();
    }
    else if(event.key === 'ArrowDown')
    {
      this.HandleCurrentSectionArrowDown();
    }
  }
 
    HandleCurrentSectionArrowUp ()
    {
      if (this.section === 2) 
      {
        this.clickScroll(this.sectionOne.nativeElement);
        this.section = 1;
      }
      else if (this.section === 3) 
      {
        this.clickScroll(this.sectionTwo.nativeElement);
        this.section = 2;
      }
      else if (this.section === 4) 
      {
        this.clickScroll(this.sectionThree.nativeElement);
        this.section = 3;
      }
      else if (this.section === 5) 
      {
        this.clickScroll(this.sectionFour.nativeElement);
        this.section = 4;
      }
    }
    
    HandleCurrentSectionArrowDown()
    {
      if (this.section === 1) {
        this.clickScroll(this.sectionTwo.nativeElement);
        this.section = 2;
      }
      else if(this.section === 2)
      {
        this.clickScroll(this.sectionThree.nativeElement);
        this.section = 3;
      }
      else if(this.section === 3)
      {
        this.clickScroll(this.sectionFour.nativeElement);
        this.section = 4;
      }
      else if(this.section === 4)
      {
        this.clickScroll(this.sectionFive.nativeElement);
        this.section = 5;
      }
    }
  
/*

    if (event.key === 'ArrowUp' && this.section === 3) 
    {
      this.clickScroll(this.sectionOne.nativeElement);
      this.section = 1;
    }
    if (event.key === 'ArrowDown' && this.section === 1 || this.section === 3) {
      this.clickScroll(this.sectionTwo.nativeElement);
    }


    if (event.key === 'ArrowDown' && this.section === 1 || this.section === 3) {
      this.clickScroll(this.sectionTwo.nativeElement);
    }
    if (event.key === 'ArrowDown' && this.section === 1 || this.section === 3) {
      this.clickScroll(this.sectionTwo.nativeElement);
    }*/

  //#region scrolling logic
  /* TODO: might be re-added later again. Disabled atm
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
    */

  //#endregion

  setInputToChecked(elementIdOne: string, elementIdTwo: string) {
    var element = <HTMLInputElement>document.getElementById(elementIdOne);
    element.checked = false;
    element = <HTMLInputElement>document.getElementById(elementIdTwo);
    element.checked = true;
  }
}
import { ViewEncapsulation, Component, ElementRef, Input, HostListener } from '@angular/core';

@Component({
  selector: 'scrollbutton-component',
  encapsulation: ViewEncapsulation.None,
  templateUrl: 'scrollbutton.component.html',
  styleUrls: ['scrollbutton.component.css']
})

export class ScrollButtonComponent {
  
  @Input() sections!: { [key: string]: ElementRef };
  currentSection: number = 1;

  @HostListener('window:keydown', ['$event'])
  HandleKeyboardEvent(event: KeyboardEvent) {
    if (event.key.toLowerCase() === 'w') {
      this.ScrollToSection(this.currentSection - 1);//TODO set this in another place, increase and decreate
    }
    if (event.key.toLowerCase() === 's') {
      this.ScrollToSection(this.currentSection + 1);//TODO set this in another place, increase and decreate
    }
  }

  OnClick(section: ElementRef){
    this.ScrollToSection(parseInt(section.nativeElement.id))
  }
  
  ScrollAnimation(section: ElementRef) {
    if (section && section.nativeElement) 
        section.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  ScrollToSection(scrollTo: number) {
    if (scrollTo >= 1 && scrollTo <= 4) {
      this.sections[scrollTo].nativeElement.scrollIntoView({ behavior: 'smooth' });
      this.SetInputToChecked(this.sections[this.currentSection].nativeElement,this.sections[scrollTo].nativeElement) //TODO maybe remove note needed
      this.currentSection = scrollTo;
    }
    if(this.currentSection < 1)
      this.currentSection = 1;
    if(this.currentSection > 4)
      this.currentSection = 4    
  }
  /*
  GetSection(index : number): HTMLElement
  {
     return this.Sections()[index]
  }
  
  Sections(): HTMLElement[]
  {
    return [
      this.sectionOne.nativeElement,
      this.sectionTwo.nativeElement,
      this.sectionThree.nativeElement,
      this.sectionFour.nativeElement    
    ];
  }

  
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
      }

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

  SetInputToChecked(elementIdOne: any, elementIdTwo: any) {
    elementIdOne.checked = false;
    elementIdTwo.checked = true;
  }

}
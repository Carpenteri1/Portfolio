import { ViewEncapsulation, Component, ElementRef, ViewChild, HostListener } from '@angular/core';
import { StartPageComponent } from 'src/app/pagecomponents/startpage/startpage.component'; 

@Component({
    selector: 'scrollbutton-component',
    templateUrl: 'scrollbutton.component.html',
    styleUrls: ['scrollbutton.component.css']
  })

export class ScrollButtonComponent
{
    currentSection: number = 1;
    startPageComponent = new StartPageComponent();

    clickScroll(el: HTMLElement) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  
    @HostListener('window:keydown', ['$event'])
    handleKeyboardEvent(event: KeyboardEvent) {
      if (event.key === 'ArrowUp') {
        this.ScrollToSection(this.currentSection-1);
      }
      if (event.key === 'ArrowDown') {
        this.ScrollToSection(this.currentSection+1);
      }
    }
  
    ScrollToSection(scrollTo:number) 
    {  
      if (scrollTo >= 0 && scrollTo <= 4) 
      {
        this.currentSection = scrollTo;  
        this.clickScroll(this.GetSection(scrollTo));
      }
    }

    GetSection(index : number): HTMLElement
    {
       return this.startPageComponent.Sections()[index]
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
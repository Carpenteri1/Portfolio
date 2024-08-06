import { ViewEncapsulation, Component, ElementRef, Input, HostListener } from '@angular/core';

@Component({
  selector: 'scrollbutton-component',
  encapsulation: ViewEncapsulation.None,
  templateUrl: 'scrollbutton.component.html',
  styleUrls: ['scrollbutton.component.css']
})

export class ScrollButtonComponent {
  
  @Input() sections!: { [key: string]: ElementRef };
  private startTouchY: number = 0;
  private scrollTimeout: any = null;
  currentSection: number = 1;

  @HostListener('window:keydown', ['$event'])
  HandleKeyboardEvent(event: KeyboardEvent) {
    const key = event.key.toLowerCase();
    if (key === 'w' || key === 'arrowup') 
        this.ScrollToSection(this.currentSection - 1);
    if (key === 's' || key === 'arrowdown') 
        this.ScrollToSection(this.currentSection + 1);
  }

  OnClick(section: ElementRef){
    this.ScrollToSection(parseInt(section.nativeElement.id))
  }

  @HostListener('window:touchstart', ['$event'])
  onTouchStart(event: TouchEvent): void {
    if (event.touches.length > 0) {
      this.startTouchY = event.touches[0].clientY;
    }
  }

  @HostListener('window:touchend', ['$event'])
  onTouchEnd(event: TouchEvent): void {
    if (event.changedTouches.length > 0) {
      const deltaY = this.startTouchY - event.changedTouches[0].clientY;
      this.ClearTimeOut();
      this.SetTimeOutForScroll(25, this.startTouchY - event.changedTouches[0].clientY);
    }
  }

  @HostListener('window:wheel', ['$event'])
  onWheelEvent(event: WheelEvent): void {
    event.deltaY;
    this.ClearTimeOut();
    this.SetTimeOutForScroll(40,event.deltaY);
  }
  
  ScrollToSection(scrollTo: number) {
    if (scrollTo >= 1 && scrollTo <= 4) {
      this.sections[scrollTo].nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      this.SetInputToChecked(this.sections[this.currentSection].nativeElement,this.sections[scrollTo].nativeElement)
      this.currentSection = scrollTo;
    }
    if(this.currentSection < 1)
      this.currentSection = 1;
    if(this.currentSection > 4)
      this.currentSection = 4    
  }

  SetInputToChecked(elementIdOne: any, elementIdTwo: any) {
    elementIdOne.checked = false;
    elementIdTwo.checked = true;
  }

  private ClearTimeOut(){
    if (this.scrollTimeout) {
      clearTimeout(this.scrollTimeout);
    }
  }

  private SetTimeOutForScroll(timeOut: number, scrollDirection: number){
    this.scrollTimeout = setTimeout(() => {
      if (scrollDirection > 0) {
        this.ScrollToSection(this.currentSection + 1);
      } else {
        this.ScrollToSection(this.currentSection - 1);
      }
    },timeOut);
  }
}
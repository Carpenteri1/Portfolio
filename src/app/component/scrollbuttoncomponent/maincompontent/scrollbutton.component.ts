import { CommonModule } from '@angular/common';
import { ViewEncapsulation, Component, ElementRef, Input, HostListener, Renderer2, DEFAULT_CURRENCY_CODE } from '@angular/core';

@Component({
  selector: 'scrollbutton-component',
  encapsulation: ViewEncapsulation.None,
  templateUrl: 'scrollbutton.component.html',
  styleUrls: ['scrollbutton.component.css'],
  imports: [CommonModule],
  standalone: true
})

export class ScrollButtonComponent {
  
  @Input() domElements!: { [key: string]: ElementRef };
  private startTouchY: number = 0;
  private scrollTimeout: any = null;
  private scrollingLocked: boolean = false;
  private sectionZero: number = 0;
  private sectionOne: number = 1;
  private sectionFour: number = 4;
  currentSection: number = this.sectionOne;

  constructor(private renderer: Renderer2){
    this.ScrollToSection(this.sectionZero);
  }

  @HostListener('window:keydown', ['$event'])
  HandleKeyboardEvent(event: KeyboardEvent) {
    let key = event.key.toLowerCase();
    if (key === 'w' || key === 'arrowup') {
      this.ClearTimeOut(false);
      this.ScrollToSection(this.currentSection - 1);
    }
    if (key === 's' || key === 'arrowdown'){
      this.ClearTimeOut(false);
      this.ScrollToSection(this.currentSection + 1);
    }
  }

  OnClick(section: ElementRef){
    this.ClearTimeOut(false);
    this.ScrollToSection(parseInt(section.nativeElement.id))
  }

  @HostListener('window:touchstart', ['$event'])
  onTouchStart(event: TouchEvent): void {
    if(!this.scrollingLocked)
      this.startTouchY = event.touches[0].clientY;
    else this.startTouchY = this.sectionZero;

  }
  
  @HostListener('window:touchend', ['$event'])
  onTouchEnd(event: TouchEvent): void {
    if (event.changedTouches.length > 0 && !this.scrollingLocked) {
      const endY = event.changedTouches[0].clientY;  
      const deltaY = this.startTouchY - endY;
  
      if (Math.abs(deltaY) > 50) {
        if (deltaY > 0) {
          this.ScrollToSection(this.currentSection + 1);
        } else {
          this.ScrollToSection(this.currentSection - 1);
        }
      }
    }
  }

  @HostListener('window:wheel', ['$event'])
  onWheelEvent(event: WheelEvent): void {
    if(!this.scrollingLocked){
      this.ScrollDirection(event.deltaY);
    }
  }
  
  private ScrollToSection(scrollTo: number) {
    if (!this.scrollingLocked && scrollTo >= this.sectionOne && scrollTo <= this.sectionFour) {
      this.ClearTimeOut(true);
      this.DisplayJumpingArrow(scrollTo);

      this.domElements[scrollTo].nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      this.SetInputToChecked(this.domElements[this.currentSection].nativeElement,this.domElements[scrollTo].nativeElement)
      this.currentSection = scrollTo;
      
      this.scrollTimeout = setTimeout(() => {
        this.scrollingLocked = false;
      },1000);
    }

    if(this.currentSection < this.sectionOne)
      this.currentSection = this.sectionOne;
    if(this.currentSection > this.sectionFour)
      this.currentSection = this.sectionFour    
  }

  private SetInputToChecked(elementIdOne: any, elementIdTwo: any) {
    elementIdOne.checked = false;
    elementIdTwo.checked = true;
  }

  private ClearTimeOut(scrollLockedValue: boolean){
    if (this.scrollTimeout) {
      clearTimeout(this.scrollTimeout);
      this.scrollingLocked = scrollLockedValue;
    }
  }

  private ScrollDirection(scrollDirection: number){
      if (scrollDirection > this.sectionZero) {
        this.ScrollToSection(this.currentSection + 1);
      } else {
        this.ScrollToSection(this.currentSection - 1);
      }
  }
  
  private DisplayJumpingArrow(scrollToValue: number){
    if (scrollToValue === this.sectionFour) {
      this.renderer.setStyle(this.domElements[5].nativeElement,'display','none');
    }
    else{
      this.renderer.setStyle(this.domElements[5].nativeElement,'display','block');
    }
  }

}
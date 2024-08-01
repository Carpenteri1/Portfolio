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
    const key = event.key.toLowerCase();

    if (key === 'w' || key === 'arrowup') 
        this.ScrollToSection(this.currentSection - 1);
    if (key === 's' || key === 'arrowdown') 
        this.ScrollToSection(this.currentSection + 1);
  }

  OnClick(section: ElementRef){
    this.ScrollToSection(parseInt(section.nativeElement.id))
  }
/*
  OnMouseScroll(event: WheelEvent) {
    const deltaY = event.deltaY;
    if(deltaY > 50) this.ScrollToSection(this.currentSection - 1);
    if(deltaY < -90) this.ScrollToSection(this.currentSection + 1);
  }

  OnTouchScroll(event: TouchEvent) {
    const deltaY = event;
    if(deltaY > 50) this.ScrollToSection(this.currentSection - 1);
    if(deltaY < -90) this.ScrollToSection(this.currentSection + 1);
  }
  */
  
  ScrollToSection(scrollTo: number) {
    if (scrollTo >= 1 && scrollTo <= 4) {
      this.sections[scrollTo].nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      this.SetInputToChecked(this.sections[this.currentSection].nativeElement,this.sections[scrollTo].nativeElement) //TODO maybe remove note needed
      this.currentSection = scrollTo;
    }
    if(this.currentSection < 1)
      this.currentSection = 1;
    if(this.currentSection > 4)
      this.currentSection = 4    
  }

  /*
  onScroll(event: WheelEvent) {
    const deltaY = event.deltaY;
    if (deltaY > 50) this.scrollDown();
    else if(deltaY < -90) this.scrollUp();
  }
  */

  SetInputToChecked(elementIdOne: any, elementIdTwo: any) {
    elementIdOne.checked = false;
    elementIdTwo.checked = true;
  }
}
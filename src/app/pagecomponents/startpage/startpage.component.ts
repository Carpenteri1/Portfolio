import { ViewEncapsulation, Component, ElementRef, ViewChild } from '@angular/core';
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

  constructor() {
    this.sectionOne = new ElementRef(null);
    this.sectionTwo = new ElementRef(null);
    this.sectionThree = new ElementRef(null);
    this.sectionFour = new ElementRef(null);
  }

  public Sections(): HTMLElement[]
  {
    return [
      this.sectionOne.nativeElement,
      this.sectionTwo.nativeElement,
      this.sectionThree.nativeElement,
      this.sectionFour.nativeElement    
    ];
  }

}
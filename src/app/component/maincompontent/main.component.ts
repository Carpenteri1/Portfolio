import { ViewEncapsulation, Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { StringHandler } from 'src/app/Utility/stringhandler';

@Component({
  selector: 'main-component',
  encapsulation: ViewEncapsulation.None,
  templateUrl: 'main.component.html',
  styleUrls: ['main.component.css']
})
export class MainComponent implements AfterViewInit {

  @ViewChild(StringHandler.sectionOne) sectionOne: ElementRef;
  @ViewChild(StringHandler.sectionTwo) sectionTwo: ElementRef;
  @ViewChild(StringHandler.sectionThree) sectionThree: ElementRef;
  @ViewChild(StringHandler.sectionFour) sectionFour: ElementRef;

  sections: { [key: string]: ElementRef } = {};

  constructor() {
    this.sectionOne = new ElementRef(null);
    this.sectionTwo = new ElementRef(null);
    this.sectionThree = new ElementRef(null);
    this.sectionFour = new ElementRef(null);
  }

  ngAfterViewInit() {
    this.sections = {
      1 : this.sectionOne,
      2: this.sectionTwo,
      3: this.sectionThree,
      4: this.sectionFour
    };
  }
}
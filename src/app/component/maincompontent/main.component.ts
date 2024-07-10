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
  @ViewChild(StringHandler.sectionFour) sectionFour: ElementRef;
  @ViewChild(StringHandler.sectionFive) sectionFive: ElementRef;

  sections: { [key: string]: ElementRef } = {};

  constructor() {
    this.sectionOne = new ElementRef(null);
    this.sectionTwo = new ElementRef(null);
    this.sectionFour = new ElementRef(null);
    this.sectionFive = new ElementRef(null);
  }

  ngAfterViewInit() {
    this.sections = {
      sectionOne: this.sectionOne,
      sectionTwo: this.sectionTwo,
      sectionFour: this.sectionFour,
      sectionFive: this.sectionFive
    };
  }
}
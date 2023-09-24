import { Component, OnInit } from "@angular/core";
import { CardModel } from "src/app/Models/CardModel";
import { StringHandler } from "src/app/Utility/stringhandler";

@Component({
  selector: 'cardlayout-component',
  templateUrl: 'cardlayout.component.html',
  styleUrls: ['cardlayout.component.css'],
})

export class CardLayoutComponent  implements OnInit{

  groupOne: HTMLElement | null = document.getElementById('cardGroupOne');
  groupTwo: HTMLElement = document.getElementById('cardGroupTwo');
  myDiv = <HTMLElement>document.getElementById("myDiv");

  cardGroupOne: CardModel[] = [];
  cardGroupTwo: CardModel[] = [];

  ngOnInit() {
    this.groupOne = document.getElementById('cardGroupOne');
    this.groupTwo = document.getElementById('cardGroupTwo');
    
    const elementToHide = document.querySelector('body');
    console.log(elementToHide);
  }
  /*
   TODO måste på nått sätt dölja ena listan när jag switchar eller fade out, 
  lika så måste dom ligga på samma plan just nu ligger dom ovanpå varan
  */

 
  slideIn = true;

  toggleSlides() {
    this.slideIn = !this.slideIn;
    this.groupOne?.innerHTML = ""//want to display none here or something
    const delayInMilliseconds = 3000; // 3000 milliseconds = 3 seconds
  setTimeout(function() {
    // After the timer expires, set the display property to 'none'
    groupOne.style.display = 'none';
  }, delayInMilliseconds);

  }
  
  constructor() {
    this.cardGroupOne.push(
      new CardModel(StringHandler.cardTitleOne,
        StringHandler.cardDescriptionOne,
        StringHandler.CardLinkOne),
      new CardModel(StringHandler.cardTitleTwo,
        StringHandler.cardDescriptionTwo,
        StringHandler.CardLinkTwo),
      new CardModel(StringHandler.cardTitleThree,
        StringHandler.cardDescriptionThree,
        StringHandler.CardLinkThree),
    );
    this.cardGroupTwo.push(
      new CardModel(StringHandler.cardTitleFour,
        StringHandler.cardDescriptionFour,
        StringHandler.CardLinkFour),
      new CardModel(StringHandler.cardTitleFive,
        StringHandler.cardDescriptionFive,
        StringHandler.CardLinkFive),
      new CardModel(StringHandler.cardTitleSix,
        StringHandler.cardDescriptionSix,
        StringHandler.CardLinkSix),
    );
  }
}
import { Component, OnInit } from "@angular/core";
import { CardModel } from "src/app/Models/CardModel";
import { StringHandler } from "src/app/Utility/stringhandler";

@Component({
  selector: 'cardlayout-component',
  templateUrl: 'cardlayout.component.html',
  styleUrls: ['cardlayout.component.css'],
})

export class CardLayoutComponent {
  cardGroupOne: CardModel[] = [];
  cardGroupTwo: CardModel[] = [];

  slideIn = true;

  toggleSlides() {
    this.slideIn = !this.slideIn;
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
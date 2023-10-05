import { Component } from "@angular/core";
import { CardModel } from "src/app/Models/CardModel";
import { StringHandler } from "src/app/Utility/stringhandler";

@Component({
  selector: 'cardlayout-component',
  templateUrl: 'cardlayout.component.html',
  styleUrls: ['cardlayout.component.css'],
})

export class CardLayoutComponent {

  cardGroup: CardModel[] = [];
  startIndex: number = 0;
  cardWidth = 0;
  /*TODO 
  should be able to do something like [style]="'display(displayType)'" on class="card-group" in html. We can then hide the cards.
  So lets say we click left, we go left with the cards, when out of screen, display:none. swipe them to the right, then display:flex, make them slide left so
  so it looks like they swipe in from the right.
  */
  displayType = "none";
  getVisibleCards(): any[] {
    const startIndex = this.startIndex;
    const endIndex = startIndex + 3;
    return this.cardGroup.slice(startIndex, endIndex);
  }

  toggleGroup(direction: 'left' | 'right'): void {
    const cardCount = this.getVisibleCards().length;
    if (direction === 'left') {
      this.cardWidth = -2000;
      setTimeout(() => {
        this.startIndex = (this.startIndex - 1 + cardCount) % cardCount;
        this.cardWidth = 0;
      }, 2000)
    } else if (direction === 'right') {
      this.cardWidth = 2000;
      setTimeout(() => {
        this.startIndex = (this.startIndex + 1) % cardCount;
        this.cardWidth = 0;
      }, 2000)
    }
  }

  constructor() {
    this.cardGroup.push(
      new CardModel(StringHandler.cardTitleOne,
        StringHandler.cardDescriptionOne,
        StringHandler.CardLinkOne),
      new CardModel(StringHandler.cardTitleTwo,
        StringHandler.cardDescriptionTwo,
        StringHandler.CardLinkTwo),
      new CardModel(StringHandler.cardTitleThree,
        StringHandler.cardDescriptionThree,
        StringHandler.CardLinkThree),
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
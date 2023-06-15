import { Component, OnInit } from "@angular/core";
import { CardModel } from "src/app/Models/CardModel";

@Component({
    selector: 'cardlayout-component',
    templateUrl: 'cardlayout.component.html',
    styleUrls: ['cardlayout.component.css'],
})

export class CardLayoutComponent implements OnInit {
    currentCardIndex: number = 0;
    cardGroupOne: CardModel[] = [];
    cardGroupTwo: CardModel[] = [];

    ngOnInit() {
    }    

    constructor() {
      this.cardGroupOne.push(
        new CardModel('Notify', 
        'Android App, Helps to Keep Notes Of Things. In alpha stage at the moment. There is an apk file to try it out,'
        ,"https://github.com/Carpenteri1/Notify"),
        new CardModel('SWAPI-API', 
        'Collect starwars characters from swapi, user can search for characters and add them to a list.'
        ,"https://github.com/Carpenteri1/SWAPI-Web-Scrapper"),
        new CardModel('WeatherApp', 
        'Collects weather data using openweather api,' + 'There is a console verson and an mvc version.'
        ,"https://github.com/Carpenteri1/WeatherApp"),
      );
      this.cardGroupTwo.push(
        new CardModel('Portfolio', 
        'Website writen with Anguler with typescript. Wanted to try something new when I wrote my portfolio.'
        ,"https://github.com/Carpenteri1/Portfolio"),
        new CardModel('Falling-Rocks', 
        'a windows console game. The player should avoide the rocks falling from the sky, with its little ship. '
        ,"https://github.com/Carpenteri1/Falling-Rocks"),
        new CardModel('KrankenHause', 
         'here are 4 different threads who should work together. simulating a hospital'
        ,"https://github.com/Carpenteri1/KrankenHause"),
      );
    }

    navigate(direction: string) {  
        if (direction === 'left') {
            if(this.currentCardIndex === 0)
                this.currentCardIndex = (this.currentCardIndex + 1);
            else this.currentCardIndex = (this.currentCardIndex - 1);
          } 
          else if (direction === 'right') 
          {
            if(this.currentCardIndex === 1)
                this.currentCardIndex = (this.currentCardIndex - 1);
            else this.currentCardIndex = (this.currentCardIndex + 1);
          }
      }     
}
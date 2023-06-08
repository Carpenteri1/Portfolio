import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'cardlayout-component',
    templateUrl: 'cardlayout.component.html',
    styleUrls: ['cardlayout.component.css'],
})

export class CardLayoutComponent implements OnInit {
    currentCardIndex: number = 0;
    cardGroupOne: Card[] = [];
    cardGroupTwo: Card[] = [];

    ngOnInit() {
    }    
    //TODO in memory data, removem when offical data is added

    constructor() {
      this.cardGroupOne.push(
        new Card('Notify', 'https://cdn.pixabay.com/photo/2016/02/07/14/45/smartphone-1184883_1280.png', 
        'Android App, Helps to Keep Notes Of Things. In alpha stage at the moment. There is an apk file to try it out,'
        ,"https://github.com/Carpenteri1/Notify"),
        new Card('SWAPI-Web-Scrapper', 'image2.jpg', 
        'Collect starwars characters from swapi, user can search for characters and add them to a list.'
        ,"https://github.com/Carpenteri1/SWAPI-Web-Scrapper"),
        new Card('WeatherApp', 'image3.jpg', 
        'Collects weather data using openweather api,' + 'There is a console verson and an mvc version.'
        ,"https://github.com/Carpenteri1/WeatherApp"),
      );
      this.cardGroupTwo.push(
        new Card('Portfolio', 'image1.jpg', 
        'Website writen with Anguler with typescript. Wanted to try something new when I wrote my portfolio.'
        ,"https://github.com/Carpenteri1/Portfolio"),
        new Card('Falling-Rocks', 'image2.jpg', 
        'a windows console game. The player should avoide the rocks falling from the sky, with its little ship. '
        ,"https://github.com/Carpenteri1/Falling-Rocks"),
        new Card('KrankenHause', 'image3.jpg', 'here are 4 different threads who should work together. simulating a hospital'
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
//TODO maybe move to model fo
export class Card {
    title: string;
    image: string;
    text: string;
    url: string;
  
    constructor(title: string, image: string, text: string, url: string) {
      this.title = title;
      this.image = image;
      this.text = text;
      this.url = url;
    }
  }
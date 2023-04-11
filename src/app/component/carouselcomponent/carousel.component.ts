import { Component, OnInit } from "@angular/core";


@Component({
    selector: 'carousel-component',
    templateUrl: 'carousel.component.html',
    styleUrls: ['carousel.component.css']
})



export class CarouselComponent implements OnInit {

    skillList1: Skill[] = [
        { name: "Majs", level: 100 },
        { name: "Kaktus", level: 40 },
    ];

    skillList2: Skill[] = [
        { name: "Korv", level: 32 },
        { name: "Gurka", level: 80 },
    ];

    listOfSkills: Skill[][] = [
         this.skillList1,
         this.skillList2
    ];

    index: number = 0;
    currentListOfSKills: Skill[] = [];


    carouselTime() {
        setInterval(() => this.setMessage(), 5000);
    }
    setMessage() {
        if (this.index <= 1) {
            this.currentListOfSKills = this.listOfSkills[this.index];
            this.index++
        }
        else this.index = 0;
    }

    ngOnInit() {
        this.carouselTime();
    }
}
interface Skill {
    name: string;
    level: number;
}
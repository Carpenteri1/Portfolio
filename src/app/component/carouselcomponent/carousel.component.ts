import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'carousel-component',
    templateUrl: 'carousel.component.html',
    styleUrls: ['carousel.component.css']
})



export class CarouselComponent implements OnInit {

    skillList1: Skill[] = [
        { name: "C#", level: 100 },
        { name: ".Net", level: 80 },
        { name: "Xamarin", level: 75 },
        { name: "SQL/T-SQL", level: 60 },
        { name: "Dapper", level: 60 },
        { name: "Entity framework", level: 45 },
        { name: "Kubernetes", level: 10 },
        { name: "Docker", level: 10 },
    ];

    skillList2: Skill[] = [
        { name: "Html", level: 80 },
        { name: "CSS/Boostrap", level: 60 },
        { name: "Javascript", level: 50 },
        { name: "Angular / Typescript", level: 50 },
        { name: "XML", level: 75 },
        { name: "JSON", level: 80 },
        { name: "Yalm", level: 35 },
        { name: "Crud / API", level: 75 },
    ];

    listOfSkills: Skill[][] = [
        this.skillList1,
        this.skillList2
    ];

    index: number = 0;
    currentListOfSKills: Skill[] = [];
    fadeIn: boolean = false;
    fadeOut: boolean = false;
    carouselTime() {
        setInterval(() => this.setMessage(), 5000);
    }
    setMessage() {
        if (this.index <= 1) {
            this.currentListOfSKills = this.listOfSkills[this.index];
            this.index++;
        } else {
            this.index = 0;
        }
    }
    ngOnInit() {
        this.carouselTime();
    }
}
interface Skill {
    name: string;
    level: number;
}
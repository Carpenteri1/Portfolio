import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'carousel-component',
    templateUrl: 'carousel.component.html',
    styleUrls: ['carousel.component.css'],
})



export class CarouselComponent implements OnInit {

    skillList1: Skill[] = [
        { name: ".Net", level: 80 },
        { name: "Asp.Net", level: 80 },
        { name: "Xamarin", level: 60 },
        { name: "Entity Framework", level: 50 },
        { name: "Dapper", level: 60 },
        { name: "SQL/T-SQL", level: 60 },
        { name: "Docker", level: 45 },
        { name: "Kubernetes", level: 10 },
    ];

    skillList2: Skill[] = [
        { name: "Html", level: 80 },
        { name: "CSS/Boostrap", level: 60 },
        { name: "C#", level: 100 },
        { name: "Javascript", level: 50 },
        { name: "Typescript", level: 40 },
        { name: "XML", level: 75 },
        { name: "JSON", level: 80 },
        { name: "Yalm", level: 35 },
        { name: "RestFul API", level: 75 },
    ];

    skillList3: Skill[] = [
        { name: "npm", level: 50 },
        { name: "Git", level: 80 },
        { name: "Angular", level: 60 },
    ];

    listOfSkills: Skill[][] = [
        this.skillList1,
        this.skillList2,
        this.skillList3
    ];

    index: number = 0;
    currentListOfSKills: Skill[] = this.listOfSkills[this.index];
    
    carouselTime() {
        setInterval(() => this.setMessage(), 5000);
    }
    setMessage() {
        if (this.index <= 2) {
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
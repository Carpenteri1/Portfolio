import { Component, OnInit } from "@angular/core";
import { transition, style, animate, trigger } from '@angular/animations';
import { ISkill } from "src/app/Interfaces/ISkill";
@Component({
    selector: 'carousel-component',
    templateUrl: 'carousel.component.html',
    styleUrls: ['carousel.component.css'],
    animations: 
    [    
        trigger('fade', [
            transition(':enter', [
                style({ opacity: 0 }),
                animate(3000, style({ opacity: 1 }))
            ]),
            transition(':leave', [
                style({ opacity: 1 }),
            ])
        ])     
    ]
})

export class CarouselComponent implements OnInit {

    skillList1: ISkill[] = [
        { name: ".Net Core", level: 80 },
        { name: ".Net Framework", level: 60 },
        { name: "Asp.Net", level: 80 },
        { name: "Xamarin", level: 70 },
        { name: "Angular", level: 50 },
        { name: "Entity FW", level: 50 },
        { name: "Dapper", level: 50 },
        { name: "SQL/T-SQL", level: 60 },
        { name: "Docker", level: 45 },
        { name: "Kubernetes", level: 10 },
    ];

    skillList2: ISkill[] = [
        { name: "Html", level: 80 },
        { name: "CSS/Boostrap", level: 60 },
        { name: "C#", level: 100 },
        { name: "Java", level: 40 },
        { name: "Javascript", level: 50 },
        { name: "Typescript", level: 40 },
        { name: "XML", level: 75 },
        { name: "JSON", level: 80 },
        { name: "Yalm", level: 35 },
        { name: "RestFul API", level: 75 },
    ];

    skillList3: ISkill[] = [
        { name: "NPM", level: 50 },
        { name: "Git", level: 80 },
        { name: "Linux", level: 70 },
        { name: "Mysql", level: 50 },
        { name: "MSSQL", level: 70 },
        { name: "Yatch", level: 50 },
        { name: "Rancher", level: 30 },
    ];

    listOfSkills: ISkill[][] = [
        this.skillList1,
        this.skillList2,
        this.skillList3
    ];

    index: number = 0;
    currentListOfSKills: ISkill[] = this.listOfSkills[this.index];
    
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
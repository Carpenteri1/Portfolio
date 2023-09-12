import { Component, OnInit } from "@angular/core";
import { transition, style, animate, trigger } from '@angular/animations';
import { ISkill } from "src/app/Interfaces/ISkill";
import { StringHandler } from "src/app/Utility/stringhandler";
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

    readonly title: string = StringHandler.carouselTitle;

    skillList1: ISkill[] = [
        { name: StringHandler.dotNet, level: 70 },
        { name: StringHandler.netFrameWork, level: 50 },
        { name: StringHandler.aspNet, level: 70 },
        { name: StringHandler.xamarin, level: 60 },
        { name: StringHandler.angular, level: 50 },
        { name: StringHandler.entityFW, level: 30 },
        { name: StringHandler.dapper, level: 40 },
        { name: StringHandler.sql, level: 40 },
        { name: StringHandler.docker, level: 40 },
        { name: StringHandler.kubernetes, level: 5 },
    ];

    skillList2: ISkill[] = [
        { name: StringHandler.html, level: 70 },
        { name: StringHandler.css, level: 50 },
        { name: StringHandler.csharp, level: 80 },
        { name: StringHandler.java, level: 20 },
        { name: StringHandler.javascript, level: 30 },
        { name: StringHandler.typescript, level: 40 },
        { name: StringHandler.xml, level: 50 },
        { name: StringHandler.json, level: 60 },
        { name: StringHandler.yalm, level: 20 },
        { name: StringHandler.restfulAPI, level: 50 },
    ];

    skillList3: ISkill[] = [
        { name: StringHandler.npm, level: 40 },
        { name: StringHandler.git, level: 70 },
        { name: StringHandler.linux, level: 60 },
        { name: StringHandler.mysql, level: 50 },
        { name: StringHandler.mssql, level: 50 },
        { name: StringHandler.yalm, level: 30 },
        { name: StringHandler.rancher, level: 20 },
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
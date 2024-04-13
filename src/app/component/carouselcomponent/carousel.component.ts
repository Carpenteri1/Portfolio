import { Component, OnInit } from "@angular/core";
import { transition, style, animate, trigger, AnimationEvent ,state} from '@angular/animations';
import { ISkill } from "src/app/Interfaces/ISkill";
import { StringHandler } from "src/app/Utility/stringhandler";
@Component({
    selector: 'carousel-component',
    templateUrl: 'carousel.component.html',
    styleUrls: ['carousel.component.css'],
    animations: [
        trigger('fade', [
          state('in', style({opacity: 1})),
          state('out', style({opacity: 0})),
          transition('in <=> out', [
            animate('1s')
          ])
        ])
    ]
})

export class CarouselComponent implements OnInit {

    readonly title: string = StringHandler.carouselTitle;
    private interval: number = 8000;
    fadeState: string = 'in';

    private intervalId: any;
    
    skillList1: ISkill[] = [
        { name: StringHandler.dotNet, level: 70 },
        { name: StringHandler.xamarin, level: 20 },
        { name: StringHandler.angular, level: 40 },
        { name: StringHandler.vuejs, level: 30 },
        { name: StringHandler.java, level: 10 },
        { name: StringHandler.xml, level: 60 },
        { name: StringHandler.json, level: 60 },
        { name: StringHandler.yalm, level: 20 },
    ];

    skillList2: ISkill[] = [
        { name: StringHandler.csharp, level: 80 },
        { name: StringHandler.sql, level: 60 },
        { name: StringHandler.html, level: 70 },
        { name: StringHandler.bootstrap, level: 40 },
        { name: StringHandler.css, level: 40 },
        { name: StringHandler.javascript, level: 35 },
        { name: StringHandler.typescript, level: 35 },
    ];

    skillList3: ISkill[] = [
        { name: StringHandler.git, level: 60 },
        { name: StringHandler.linux, level: 60 },
        { name: StringHandler.rancher, level: 10 },
        { name: StringHandler.docker, level: 10 },
        { name: StringHandler.kubernetes, level: 5 },
        { name: StringHandler.aws, level: 10 },
        { name: StringHandler.rabbitMQ, level: 10 },
    ];

    listOfSkills: ISkill[][] = [
        this.skillList1,
        this.skillList2,
        this.skillList3
    ];

    index: number = 1;
    currentListOfSKills: ISkill[] = this.listOfSkills[this.index];
    
    carouselTime(interval:number) 
    {
        this.intervalId = setInterval(() => 
            this.carouselRotation(), interval);
    }

    carouselRotation()
    {
        this.index++;
        this.startFadeOut();
    }

    setMessage() 
    {
        if (this.index <= 2 && 
            this.index >= 0) 
        {
            this.currentListOfSKills = this.listOfSkills[this.index];
        } 
        else if(this.index >= 3)
        {
            this.index = 0;
            this.setMessage();
        }
        else if(this.index <= -1){
            this.index = 2;
            this.setMessage();
        }           
    }

    toggleGroup(direction: 'left' | 'right'): void 
    {
        this.resetCarouselTime();
        if(direction === 'left'){
            this.index--;
        }
        if(direction === 'right'){
            this.index++;  
        }
        this.startFadeOut();
    }

    startFadeOut() {
        this.fadeState = 'out';
    }
    
    fadeOutDone(event: AnimationEvent) {
      if (event.toState === 'out') {
        this.fadeState = 'in';
        this.setMessage();
      }
    }

    private resetCarouselTime(): void
    {
        if (this.intervalId) 
        {
            clearInterval(this.intervalId);
        }
        if(this.fadeState = 'in')
            this.carouselTime(this.interval)
    }

    ngOnInit() 
    {
        this.carouselTime(this.interval);
    }    
}
import { Component, OnInit } from "@angular/core";


@Component({
    selector:'carousel-component',
    templateUrl:'carousel.component.html',
    styleUrls:['../../../../node_modules/bootstrap/dist/css/Bootstrap.min.css','carousel.component.css']
})



export class CarouselComponent implements OnInit{

    index:number = 0;
    titleContent = 
    [
        ".Net Utvecklare",
        "Angular",
        "Structured Query Language"
    ];
    textContet = 
    [
    "Kunskap inom både .Net core och .Net framework. Restfulla apier, Blazor, MVC, C#, Javascript, Jquery och Ajax requests."+'\n'+"Har jobbat i flera projekt mot apier, även byggt egna apier.",
    "Med Typescript och Javascript, under flera projekt. Bland annat för campus varberg. Även jobbat mot restfulla apier inom .net med fler. ",
    "Basic SQL / T-SQl. Stored procedure, functions and triggers med MySQL och Microsofts SQL Server Managment Studio.",
    ]
   
    currentTitleMessage = this.titleContent[0];
    currentTextMessage = this.textContet[0];
    carouselTime(){
        setInterval(() => this.setMessage(), 5000);
    }
    setMessage(){
        if(this.index < 3){
            this.currentTitleMessage = this.titleContent[this.index];
            this.currentTextMessage = this.textContet[this.index];
        }
        if(this.index === 3){
            this.index = 0;
            this.currentTitleMessage = this.titleContent[this.index];
            this.currentTextMessage = this.textContet[this.index];
        }
        this.index++
    }
        
    ngOnInit() 
    {   
        this.carouselTime();
    }
}
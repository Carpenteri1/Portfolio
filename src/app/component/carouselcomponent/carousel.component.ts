import { Component, OnInit } from "@angular/core";


@Component({
    selector:'carousel-component',
    templateUrl:'carousel.component.html',
    styleUrls:['../../../../node_modules/bootstrap/dist/css/bootstrap.min.css','carousel.component.css']
})



export class CarouselComponent implements OnInit{
    
    index:number = 0;
    titleContent = [".Net Developer","Frontend Developer","Backend Developer","Angular Developer"];
    textContet = ["Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    "Nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit",
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",]
    currentTitleMessage = this.titleContent[0];
    currentTextMessage = this.textContet[0];
    carouselTime(){
        setInterval(() => this.setMessage(), 4000);
    }
    setMessage(){
        if(this.index < 4){
            this.currentTitleMessage = this.titleContent[this.index];
            this.currentTextMessage = this.textContet[this.index];
        }
        if(this.index === 4){
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
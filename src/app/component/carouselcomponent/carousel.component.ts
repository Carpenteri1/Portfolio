import { Component, OnInit } from "@angular/core";

@Component({
    selector:'carousel-component',
    templateUrl:'carousel.component.html',
    styleUrls:['../../../../node_modules/bootstrap/dist/css/bootstrap.css','carousel.component.css']
})

export class CarouselComponent implements OnInit{
    
    titleContent = [".Net Developer","Frontend / Backend Developer","Angular Developer"];
    textContet = ["Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    "Nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit",
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."]
    currentTitleMessage:string = "";
    currentTextMessage:string ="";
    carouselTime(){
        this.currentTitleMessage = this.titleContent[0];
        this.currentTextMessage = this.textContet[0];
        for(let i = 1;i <= this.titleContent.length;i++)
        {
            setTimeout(() => {
                this.currentTitleMessage = this.titleContent[i];
                this.currentTextMessage = this.textContet[i];
                if(i ===  this.titleContent.length){
                    this.carouselTime();
                }
            }, 1500*(i+1));
            
        }
    }

    ngOnInit() 
    {
        this.carouselTime();
    }
}
import { Component, OnInit } from "@angular/core";

@Component({
    selector:'carousel-component',
    templateUrl:'carousel.component.html',
    styleUrls:['../../../../node_modules/bootstrap/dist/css/bootstrap.min.css','carousel.component.css']
})

export class CarouselComponent implements OnInit{
    
   
    currentTitleMessage:string = "";
    currentTextMessage:string ="";
/*    carouselTime(index:any){
        let titleContent = ["",".Net Developer","Frontend Developer","Backend Developer","Angular Developer",""];
        let textContet = ["","Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        "Nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit",
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",""]
        this.currentTitleMessage = titleContent[0];

        for(let i = index;i <= titleContent.length;)
        {
                setTimeout(() => {
                    console.log('else');
                    if(i<=titleContent.length){
                        this.currentTitleMessage = titleContent[i];
                        this.currentTextMessage = textContet[i];
                        i++
                    }
                    else
                    {
                        console.log('else');
                        this.carouselTime(1);
                    }
                },4000*(i+1));       
        }
        
    }

    callMethod(i:number) : any{
       if(i < 5){
            return 4000*(i+1);
       }
       if(i > 5){
            return 1000*(i+1);
       }  
    }*/

    ngOnInit() 
    { 
        //this.carouselTime(1);
    }
}
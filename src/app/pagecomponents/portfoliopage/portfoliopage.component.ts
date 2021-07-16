import { Component } from "@angular/core";
import { faGithub,faAngular } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons'
@Component({
    selector:'',
    templateUrl:'portfoliopage.component.html',
    styleUrls:['../../../../node_modules/bootstrap/dist/css/bootstrap.min.css','portfoliopage.component.css']

})

export class PortfolioComponent{
cardOneShowElemet = false;
cardTwoShowElemet = false;
cardThreeShowElemet = false;
cardFourShowElemet = false;
cardFiveShowElemet = false;
cardSixShowElemet = false;
cardSevenShowElemet = false;
cardeightShowElemet = false;
cardNineShowElemet = false;
cardTenShowElemet = false;
   showButton:boolean = false;
   githubIcon = faGithub;
   linkIcon = faLink;
    angularIcon = faAngular;
}
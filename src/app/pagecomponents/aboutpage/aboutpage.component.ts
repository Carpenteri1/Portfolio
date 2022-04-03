import { Component } from '@angular/core';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'about',
  templateUrl: 'aboutpage.component.html',
  styleUrls: ['../../../../node_modules/bootstrap/dist/css/Bootstrap.min.css','aboutpage.component.css']
})
export class AboutPageComponent {
  //public pdfSrc: string = "../../../assets/files/CV-NiclasTimle.pdf";
  arrowDown = faChevronDown;
  public isShow1 = false;
  public isShow2 = false;
  public isShow3 = false;
  public isShow4 = false;
  public isShow5 = false;
  toggleDisplay(id:any) {
    if(id===1){
      this.isShow1 = !this.isShow1;
    }
    if(id===2){
      this.isShow2 = !this.isShow2;
    }
    if(id===3){
      this.isShow3 = !this.isShow3;
    }
    if(id===4){
      this.isShow4 = !this.isShow4;
    }
    if(id===5){
      this.isShow5 = !this.isShow5;
    }
  }
}

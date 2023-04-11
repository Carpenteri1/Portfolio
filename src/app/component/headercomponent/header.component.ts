import { Component } from "@angular/core";
import { faBars } from '@fortawesome/free-solid-svg-icons';
@Component({
    selector:'header-component',
    templateUrl:'./header.component.html',
    styleUrls:['header.component.css']
})
export class HeaderComponent{
   menuIcon = faBars;
}
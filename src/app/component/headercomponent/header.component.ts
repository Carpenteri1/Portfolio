import { Component } from "@angular/core";
import { faBars } from '@fortawesome/free-solid-svg-icons';
@Component({
    selector:'header-component',
    templateUrl:'./header.component.html',
    styleUrls:['../../../../node_modules/bootstrap/dist/css/Bootstrap.css','header.component.css']
})
export class HeaderComponent{
   menuIcon = faBars;
}
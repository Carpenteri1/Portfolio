import { Component } from "@angular/core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faBars } from '@fortawesome/free-solid-svg-icons';
@Component({
    selector:'header-component',
    templateUrl:'./header.component.html',
    styleUrls:['header.component.css','../../../../node_modules/bootstrap/dist/css/bootstrap.css','header.component.css']
})
export class HeaderComponent{
    menuIcon = faBars;
}
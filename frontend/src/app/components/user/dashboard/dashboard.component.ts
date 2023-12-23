import { Component } from '@angular/core';
import { UsernavComponent } from "../../navbars/usernav/usernav.component";

@Component({
    selector: 'app-dashboard',
    standalone: true,
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.css',
    imports: [UsernavComponent]
})
export class DashboardComponent {

}

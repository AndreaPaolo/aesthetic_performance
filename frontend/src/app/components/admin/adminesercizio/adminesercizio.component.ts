import { Component } from '@angular/core';
import { RouterModule } from "@angular/router";
import { AdminnavComponent } from "../../navbars/adminnav/adminnav.component";
import { AdminfooterComponent } from "../../footers/adminfooter/adminfooter.component";

@Component({
  selector: 'app-adminesercizio',
  standalone: true,
  imports: [
    RouterModule,
    AdminnavComponent,
    AdminfooterComponent
  ],
  templateUrl: './adminesercizio.component.html',
  styleUrl: './adminesercizio.component.css'
})
export class AdminesercizioComponent {

}

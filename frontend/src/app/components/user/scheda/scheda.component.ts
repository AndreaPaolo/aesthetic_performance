import { Component } from '@angular/core';
import { UsernavComponent } from "../../navbars/usernav/usernav.component";
import { UserfooterComponent } from "../../footers/userfooter/userfooter.component";
import { RouterModule } from "@angular/router";

@Component({
  selector: 'app-scheda',
  standalone: true,
  imports: [
    UsernavComponent,
    UserfooterComponent,
    RouterModule
  ],
  templateUrl: './scheda.component.html',
  styleUrl: './scheda.component.css'
})
export class SchedaComponent {

}

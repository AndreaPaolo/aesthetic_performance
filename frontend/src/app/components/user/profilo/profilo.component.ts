import { Component } from '@angular/core';
import { UsernavComponent } from "../../navbars/usernav/usernav.component";
import { UserfooterComponent } from "../../footers/userfooter/userfooter.component";
import { RouterModule } from "@angular/router";

@Component({
  selector: 'app-profilo',
  standalone: true,
  imports: [
    UsernavComponent,
    UserfooterComponent,
    RouterModule
  ],
  templateUrl: './profilo.component.html',
  styleUrl: './profilo.component.css'
})
export class ProfiloComponent {

}

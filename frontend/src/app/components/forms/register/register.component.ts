import { Component } from '@angular/core';
import { RouterModule } from "@angular/router";
import { LandingnavComponent } from "../../navbars/landingnav/landingnav.component";
import { LandingfooterComponent } from "../../footers/landingfooter/landingfooter.component";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    LandingnavComponent,
    LandingfooterComponent,
    RouterModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

}

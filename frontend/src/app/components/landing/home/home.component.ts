import { Component } from '@angular/core';
import { RouterModule } from "@angular/router";
import { LandingnavComponent } from "../../navbars/landingnav/landingnav.component";
import { LandingfooterComponent } from "../../footers/landingfooter/landingfooter.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    LandingnavComponent,
    LandingfooterComponent,
    RouterModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

import { Component } from '@angular/core';
import { LandingnavComponent } from "../../navbars/landingnav/landingnav.component";
import { LandingfooterComponent } from "../../footers/landingfooter/landingfooter.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    LandingnavComponent,
    LandingfooterComponent
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}

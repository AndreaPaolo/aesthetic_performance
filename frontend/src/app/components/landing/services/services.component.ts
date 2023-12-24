import { Component } from '@angular/core';
import { LandingnavComponent } from "../../navbars/landingnav/landingnav.component";
import { LandingfooterComponent } from "../../footers/landingfooter/landingfooter.component";

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [
    LandingnavComponent,
    LandingfooterComponent
  ],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {

}

import { Component } from '@angular/core';
import { LandingnavComponent } from "../../navbars/landingnav/landingnav.component";
import { LandingfooterComponent } from "../../footers/landingfooter/landingfooter.component";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    LandingnavComponent,
    LandingfooterComponent
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}

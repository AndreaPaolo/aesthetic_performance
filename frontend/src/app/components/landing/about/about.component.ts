import { Component } from '@angular/core';
import { LandingnavComponent } from "../../navbars/landingnav/landingnav.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    LandingnavComponent
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}

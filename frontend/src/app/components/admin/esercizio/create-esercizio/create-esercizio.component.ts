import { Component } from '@angular/core';
import { Router, RouterModule } from "@angular/router";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { AdminnavComponent } from "../../../navbars/adminnav/adminnav.component";
import { AdminfooterComponent } from "../../../footers/adminfooter/adminfooter.component";



@Component({
  selector: 'app-create-esercizio',
  standalone: true,
  imports: [
    FormsModule,
    RouterModule,
    CommonModule,

    AdminnavComponent,
    AdminfooterComponent,
  ],
  templateUrl: './create-esercizio.component.html',
  styleUrl: './create-esercizio.component.css'
})
export class CreateEsercizioComponent {

  constructor(
    private router: Router,
    private toastr: ToastrService
  ){}
}

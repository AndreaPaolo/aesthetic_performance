import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from "@angular/router";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { AdminnavComponent } from "../../../navbars/adminnav/adminnav.component";
import { AdminfooterComponent } from "../../../footers/adminfooter/adminfooter.component";

@Component({
  selector: 'app-edit-esercizio',
  standalone: true,
  imports: [
    FormsModule,
    RouterModule,
    CommonModule,

    AdminnavComponent,
    AdminfooterComponent,
  ],
  templateUrl: './edit-esercizio.component.html',
  styleUrl: './edit-esercizio.component.css'
})
export class EditEsercizioComponent implements OnInit{

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ){ }

  ngOnInit(){}

}

import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from "@angular/router";
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

import { AdminnavComponent } from "../../../navbars/adminnav/adminnav.component";
import { AdminfooterComponent } from "../../../footers/adminfooter/adminfooter.component";

@Component({
  selector: 'app-view-esercizio',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    AdminnavComponent,
    AdminfooterComponent,
  ],
  templateUrl: './view-esercizio.component.html',
  styleUrl: './view-esercizio.component.css'
})
export class ViewEsercizioComponent implements OnInit{

  constructor(private router: Router, private toastr: ToastrService){ }

  ngOnInit(){}
}

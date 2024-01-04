import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from "@angular/router";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { AdminnavComponent } from "../../../navbars/adminnav/adminnav.component";
import { AdminfooterComponent } from "../../../footers/adminfooter/adminfooter.component";

import { EsercizioService } from '../../../../services/esercizio.service';
import { Esercizio } from '../../../../model_body';

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

  esercizio: Esercizio = new Esercizio;

  constructor(
    private esercizioService: EsercizioService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ){ }

  ngOnInit(){
    this.esercizioService.getEsercizio(this.activatedRoute.snapshot.params['esercizio_id']).subscribe((scheda: any)=>{
      this.esercizio = scheda;
    });
  }

  modifica(){
    console.log(this.esercizio)
    this.esercizioService.modificaEsercizio(this.esercizio).subscribe({
      next: () => {
        this.toastr.success('Esercizio modificato', 'Successo!');
        this.router.navigate(["/admin/esercizio"])
      },
      error: (error) => {
        this.toastr.error(error.message, "Attenzione", {
          timeOut: 3000
        });
      }
    });
  }

}

import { Component } from '@angular/core';
import { Router, RouterModule } from "@angular/router";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { AdminnavComponent } from "../../../navbars/adminnav/adminnav.component";
import { AdminfooterComponent } from "../../../footers/adminfooter/adminfooter.component";

import { EsercizioService } from '../../../../services/esercizio.service';
import { Esercizio } from '../../../../model_body';

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

  esercizio: Esercizio = new Esercizio;

  constructor(
    private esercizioService: EsercizioService,
    private router: Router,
    private toastr: ToastrService
  ){}

  aggiungi(){
    this.esercizioService.aggiungiEsercizio(this.esercizio).subscribe({
      next: () => {
        this.toastr.success('Esercizio aggiunto', 'Successo!');
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

import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from "@angular/router";
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

import { AdminnavComponent } from "../../../navbars/adminnav/adminnav.component";
import { AdminfooterComponent } from "../../../footers/adminfooter/adminfooter.component";

import { EsercizioService } from '../../../../services/esercizio.service';
import { Esercizzi } from '../../../../model';

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
  esercizi: Esercizzi[];

  constructor(private esercizioService: EsercizioService, private router: Router, private toastr: ToastrService){ }

  ngOnInit(){
    this.esercizioService.getEsercizzi().subscribe((data: Esercizzi[]) => {
      this.esercizi = data;
    });
    this.esercizioService.loadEsercizzi();
  }

  aggiungiEsercizio(){
    this.router.navigate(["/admin/esercizio/create"]);
  }

  modificaEsercizio(esercizio_id: any){
    this.router.navigate(["/admin/esercizio/edit/" + esercizio_id]);
  }

  eliminaEsercizio(esercizio_id: any){
    this.esercizioService.eliminaEsercizio(esercizio_id).subscribe({
      next: () => {
        this.toastr.success('Scheda eliminata', 'Successo!');
        this.esercizioService.loadEsercizzi();
      },
      error: (error) => {
        this.toastr.error(error.message, "Attenzione", {
          timeOut: 3000
        });
      }
    });
  }
}

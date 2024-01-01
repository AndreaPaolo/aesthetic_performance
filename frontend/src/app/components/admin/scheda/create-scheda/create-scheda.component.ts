import { Component } from '@angular/core';
import { Router, RouterModule } from "@angular/router";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { AdminnavComponent } from "../../../navbars/adminnav/adminnav.component";
import { AdminfooterComponent } from "../../../footers/adminfooter/adminfooter.component";

import { SchedaService } from '../../../../services/scheda.service';
import { Scheda } from '../../../../model_body';

@Component({
  selector: 'app-create-scheda',
  standalone: true,
  imports: [
    FormsModule,
    RouterModule,
    CommonModule,

    AdminnavComponent,
    AdminfooterComponent,
  ],
  templateUrl: './create-scheda.component.html',
  styleUrl: './create-scheda.component.css'
})
export class CreateSchedaComponent{

  scheda: Scheda = new Scheda;

  constructor(
    private schedaService:SchedaService,
    private router: Router,
    private toastr: ToastrService
  ){}

  aggiungi(){
    console.log(this.scheda)
    this.schedaService.aggiungiScheda(this.scheda).subscribe({
      next: () => {
        this.toastr.success('Scheda aggiunta', 'Successo!');
        this.router.navigate(["/admin/scheda"])
      },
      error: (error) => {
        this.toastr.error(error.message, "Attenzione", {
          timeOut: 3000
        });
      }
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from "@angular/router";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { AdminnavComponent } from "../../../navbars/adminnav/adminnav.component";
import { AdminfooterComponent } from "../../../footers/adminfooter/adminfooter.component";

import { SchedaService } from '../../../../services/scheda.service';
import { Scheda } from '../../../../model_body';

@Component({
  selector: 'app-edit-scheda',
  standalone: true,
  imports: [
    FormsModule,
    RouterModule,
    CommonModule,

    AdminnavComponent,
    AdminfooterComponent,
  ],
  templateUrl: './edit-scheda.component.html',
  styleUrl: './edit-scheda.component.css'
})
export class EditSchedaComponent implements OnInit{

  scheda: Scheda = new Scheda;


  constructor(
    private schedaService:SchedaService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ){ }

  ngOnInit(){
    this.schedaService.getScheda(this.activatedRoute.snapshot.params['scheda_id']).subscribe((scheda: any)=>{
      this.scheda = scheda;
    })
  }

  modifica(){
    this.schedaService.modificaScheda(this.scheda).subscribe({
      next: () => {
        this.toastr.success('Scheda modificata', 'Successo!');
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

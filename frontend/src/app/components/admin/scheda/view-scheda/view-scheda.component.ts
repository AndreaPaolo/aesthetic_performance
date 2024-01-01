import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from "@angular/router";
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

import { AdminnavComponent } from "../../../navbars/adminnav/adminnav.component";
import { AdminfooterComponent } from "../../../footers/adminfooter/adminfooter.component";

import { SchedaService } from '../../../../services/scheda.service';
import { Schede } from '../../../../model';

@Component({
  selector: 'app-view-scheda',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    AdminnavComponent,
    AdminfooterComponent,
  ],
  templateUrl: './view-scheda.component.html',
  styleUrl: './view-scheda.component.css'
})
export class ViewSchedaComponent implements OnInit{
  schede: Schede[] = [];

  constructor(private schedaService:SchedaService, private router: Router, private toastr: ToastrService){ }

  ngOnInit(){
    this.schedaService.getSchede().subscribe((data: Schede[]) => {
      this.schede = data;
    });
    this.schedaService.loadSchede();
  }

  aggiungiScheda(){
    this.router.navigate(["/admin/scheda/create"]);
  }

  modificaScheda(scheda_id: any){
    this.router.navigate(["/admin/scheda/edit/" + scheda_id]);
  }

  eliminaScheda(scheda_id: any){
    this.schedaService.eliminaScheda(scheda_id).subscribe({
      next: () => {
        this.toastr.success('Scheda eliminata', 'Successo!');
        this.schedaService.loadSchede();
      },
      error: (error) => {
        this.toastr.error(error.message, "Attenzione", {
          timeOut: 3000
        });
      }
    });
  }
}

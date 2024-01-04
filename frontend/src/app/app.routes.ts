import { Routes } from '@angular/router';
import { DashboardComponent } from './components/user/dashboard/dashboard.component';
import { AdminpanelComponent } from './components/admin/adminpanel/adminpanel.component';
import { HomeComponent } from './components/landing/home/home.component';
import { ServicesComponent } from './components/landing/services/services.component';
import { AboutComponent } from './components/landing/about/about.component';
import { ContactComponent } from './components/landing/contact/contact.component';
import { LoginComponent } from './components/forms/login/login.component';
import { RegisterComponent } from './components/forms/register/register.component';
import { SchedaComponent } from './components/user/scheda/scheda.component';
import { ProfiloComponent } from './components/user/profilo/profilo.component';

//Admin - Scheda
import { ViewSchedaComponent } from "./components/admin/scheda/view-scheda/view-scheda.component";
import { CreateSchedaComponent } from "./components/admin/scheda/create-scheda/create-scheda.component";
import { EditSchedaComponent } from "./components/admin/scheda/edit-scheda/edit-scheda.component";
//Admin - sercizio
import { ViewEsercizioComponent } from './components/admin/esercizio/view-esercizio/view-esercizio.component';
import { CreateEsercizioComponent } from './components/admin/esercizio/create-esercizio/create-esercizio.component';
import { EditEsercizioComponent } from './components/admin/esercizio/edit-esercizio/edit-esercizio.component';



export const routes: Routes = [
  //Landing
  { path: '', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: 'services', component: ServicesComponent},
  { path: 'contact', component: ContactComponent},
  //Forms
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  //User
  { path: 'dashboard', component: DashboardComponent},
  { path: 'scheda', component: SchedaComponent},
  { path: 'profilo', component: ProfiloComponent},
  //Admin
    { path: 'admin/dashboard', component: AdminpanelComponent},
    //Scheda
      { path: 'admin/scheda', component: ViewSchedaComponent},
      { path: 'admin/scheda/create', component: CreateSchedaComponent},
      { path: 'admin/scheda/edit/:scheda_id', component: EditSchedaComponent},
    //Esercizio
      { path: 'admin/esercizio', component: ViewEsercizioComponent},
      { path: 'admin/esercizio/create', component: CreateEsercizioComponent},
      { path: 'admin/esercizio/edit/:esercizio_id', component: EditEsercizioComponent},
];

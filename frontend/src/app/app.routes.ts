import { Routes } from '@angular/router';
import { DashboardComponent } from './components/user/dashboard/dashboard.component';
import { AdminpanelComponent } from './components/admin/adminpanel/adminpanel.component';
import { HomeComponent } from './components/landing/home/home.component';
import { ServicesComponent } from './components/landing/services/services.component';
import { AboutComponent } from './components/landing/about/about.component';
import { ContactComponent } from './components/landing/contact/contact.component';
import { LoginComponent } from './components/forms/login/login.component';
import { RegisterComponent } from './components/forms/register/register.component';

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
  //Admin
  { path: 'admin/dashboard', component: AdminpanelComponent}
];

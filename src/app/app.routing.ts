import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { EmpresasComponent } from "./empresas/empresas.component";
import { EmpresaComponent } from "./empresas/empresa/empresa.component";
import { LoginComponent } from "./login/login.component";
import { AuthGuard } from "./guards/auth.guard";

export const APP_ROUTES: Routes = [

  { path: 'login', component: LoginComponent },
  { path: '', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'empresas', component: EmpresasComponent , canActivate: [AuthGuard] },
    { path: 'empresas/:id', component: EmpresaComponent,
    children: [
        { path: '', redirectTo: 'cadastro', pathMatch : 'full' },
        { path: 'cadastro', component: EmpresasComponent },
   ], canActivate: [AuthGuard]
  },
  { path: '**', redirectTo: '' }
]
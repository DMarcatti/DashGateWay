import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { EmpresasComponent } from "./empresas/empresas.component";
import { EmpresaComponent } from "./empresas/empresa/empresa.component";

export const APP_ROUTES: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'empresas', component: EmpresasComponent },
  { path: 'empresas/:id', component: EmpresaComponent,
    children: [
        { path: '', redirectTo: 'cadastro', pathMatch : 'full' },
        { path: 'cadastro', component: EmpresasComponent },
   ]
  }
]
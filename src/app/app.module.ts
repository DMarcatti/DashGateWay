import { BrowserModule } from '@angular/platform-browser';
import {SlimLoadingBarModule} from 'ng2-slim-loading-bar';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, BaseRequestOptions } from '@angular/http';
import { RouterModule } from "@angular/router";
import { AppComponent }       from './app.component';
import { HeaderComponent }    from './home/header/header.component';
import { NavComponent }       from './home/nav/nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmpresasComponent }  from './empresas/empresas.component';


import { EmpresaComponent } from './empresas/empresa/empresa.component';
import { InputComponent } from './shared/input/input.component';

import {DataTableModule} from "angular2-datatable";
import { APP_ROUTES } from "./app.routing";
import { EmpresasService } from "./empresas/empresas.service";
import { FiltroPipe } from './shared/pipe/filtro.pipe';
import { FormDebugComponent } from './form-debug/form-debug.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from "./guards/auth.guard";
import { AuthenticationService } from "./service/authentication.service";
import { UserService } from "./service/user.service";
import { MockBackend } from "@angular/http/testing";
import { fakeBackendProvider } from "./_helpers/fake-backend";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    DashboardComponent,
    EmpresasComponent,
    EmpresaComponent,
    InputComponent,
    FiltroPipe,
    FormDebugComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    SlimLoadingBarModule.forRoot(),
    FormsModule,
    HttpModule,
    RouterModule.forRoot(APP_ROUTES),
    DataTableModule,
    ReactiveFormsModule
  ],
  providers: [
    EmpresasService,
    AuthGuard,
    AuthenticationService,
    UserService,
    fakeBackendProvider,
    MockBackend,
    BaseRequestOptions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

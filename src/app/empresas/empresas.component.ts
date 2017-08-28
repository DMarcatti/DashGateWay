import { Component, OnInit, Input, Output, ViewChild } from '@angular/core';
import { Empresa } from "./empresa/empresa.model";
import { EmpresasService } from "./empresas.service";
import { SlimLoadingBarService } from "ng2-slim-loading-bar";




@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.css']
})
export class EmpresasComponent implements OnInit {

   @Input() data: Empresa[];

   selectedEntities: any[];
    
    public filterQuery = "";
    public rowsOnPage = 10;
    public sortBy = "email";
    public sortOrder = "asc";   

   constructor(private empresaService: EmpresasService
                 ,private slimLoadingBarService: SlimLoadingBarService
  ) {}

    startLoading() {
        this.slimLoadingBarService.start(() => {
            console.log('Loading complete');
        });
    }

    stopLoading() {
        this.slimLoadingBarService.stop();
    }

    completeLoading() {
        this.slimLoadingBarService.complete();
    }



   ngOnInit() {
      this.reloadItens();
   }

   reloadItens(){
        this.startLoading() 
        this.empresaService.getEmpresas()
         .subscribe((empresas) => {
              this.data = empresas;
              this.completeLoading();
         });
   }


    private sortByWordLength = (a:any) => {
        return a.name.length;
    }
    
    public removeItem(empresa: any) {
      console.log("Remove: ", empresa.nome);
    }   
}

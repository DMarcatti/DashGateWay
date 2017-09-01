import { Component, OnInit, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmpresasService } from "../empresas.service";
import { Empresa } from "./empresa.model";
import { FormArray, FormBuilder, FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms'
import { SlimLoadingBarService } from "ng2-slim-loading-bar";



@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html'
})



export class EmpresaComponent implements OnInit {

  constructor(private empresaService: EmpresasService,
              private formBuilder: FormBuilder,
              private slimLoadingBarService: SlimLoadingBarService ) { }

  @Input() empresa: Empresa;
  empresaForm: FormGroup

  onSubmit() {
  }
 
  ngOnInit() {

    this.empresaForm =
      this.formBuilder.group({
      cnpj: this.formBuilder.control('', [Validators.required, Validators.minLength(5), Validators.maxLength(14), Validators.pattern("^(0|[1-9][0-9]*)$")]),
      nome: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
      items: this.formBuilder.array(
        [this.buildItem('')],
        ItemsValidator.minQuantitySum(300)
      )
     });
  }
    buildItem(val: string) {
        return new FormGroup({
        name: new FormControl(val, Validators.required),
        selec: new FormControl(), 
        quantity: new FormControl()
        })
    }
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

  gravarEmpresa(empresa: Empresa){
    this.startLoading();
    this.empresaForm.reset();
    this.empresaService.gravarEmpresa(empresa)
        .subscribe((empresa) => {this.empresa = empresa,
        this.completeLoading()});
  }
}

class ItemsValidator {
    
      static minQuantitySum(val: number) {
        return (c: FormControl) => {
          let sum = c.value
            .map(item => item.quantity)
            .reduce((acc, cur) => acc + cur, 0 );
          if (sum < val) {
            return { minSum: val }
          }
        }
      }
  
  }
  
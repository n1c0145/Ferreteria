import { Component, OnInit , Input} from '@angular/core';
import { DatosService } from ".././../services/datos.service";
@Component({
  selector: 'app-nuevafactura',
  templateUrl: './nuevafactura.component.html',
  styleUrls: ['./nuevafactura.component.css']
})
export class NuevafacturaComponent implements OnInit {
  public arrayDesdeService: Array<any>;
  public arrayDesdeService2: Array<any>;
  constructor(private _service: DatosService) { }

  ngOnInit(): void {
    this.arrayDesdeService = this._service.getArray();
   this.arrayDesdeService2 = this._service.getArray2()
   console.log(this.arrayDesdeService2);
   
  }

}

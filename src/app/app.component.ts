import { Component, OnInit } from '@angular/core';
import{SolicitudPagoService} from './Services/solicitud-pago.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Pagos';

  pagos:any;

  constructor(public SolicitudPagoService:SolicitudPagoService){


  }

  ngOnInit() {

    this.SolicitudPagoService.addPagos().subscribe(
      r=>{
        this.pagos=r;
        console.log(r)
      },
      e=>{console.error(e)}
    )
  }
}

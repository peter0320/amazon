import { Component, OnInit } from '@angular/core';
import { ClienteModelo } from 'src/app/modelos/cliente.model';
import { ClienteService } from 'src/app/servicios/cliente.service';
import { ServicioService } from 'src/app/servicios/servicio.service';
import { ServicioModelo } from 'src/app/modelos/servicio.model';
import { FormBuilder, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private fb: FormBuilder, private clienteService: ClienteService,
    private router: Router,
    private servicioService: ServicioService) { }

  listadoClientes: ClienteModelo[] = []
  listadoEncomienda: ClienteModelo[] = []


  fgValidacion = this.fb.group({
    origen: ['', [Validators.required]],
    destino: ['', [Validators.required]],
    fecha: ['', [Validators.required]],
    hora: ['', [Validators.required]],
    encomienda: ['', [Validators.required]],
    valor: ['', [Validators.required]],
    
  });

  store(){
    let servicio = new ServicioModelo();
    servicio.origen = this.fgValidacion.controls["origen"].value;
    servicio.destino = this.fgValidacion.controls["destino"].value;
    servicio.fecha = this.fgValidacion.controls["fecha"].value;
    servicio.hora = this.fgValidacion.controls["hora"].value;
    servicio.encomienda = this.fgValidacion.controls["encomienda"].value;
    servicio.valor = this.fgValidacion.controls["valor"].value;   
 
    this.servicioService.store(servicio).subscribe((data: ServicioModelo)=> {
      Swal.fire('Creado correctamente!', '', 'success')
      this.router.navigate(['/servicios/get']);
    },
    (error: any) => {
      console.log(error)
      alert("Error en el envio");
    })
  }


  ngOnInit(): void {
  }


  


}

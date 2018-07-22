import { Component, OnInit } from '@angular/core';
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ActivatedRoute} from "@angular/router";
import {Usuario} from "../../Usuario";
import {DatosUsuarioService} from "../../Services/datos-usuario.service";

@Component({
  selector: 'app-formulario-cuenta',
  templateUrl: './formulario-cuenta.component.html',
  styleUrls: ['./formulario-cuenta.component.css']
})
export class FormularioCuentaComponent implements OnInit {
  usuario: Usuario;
  constructor(private rutas:  ActivatedRoute,
              private servicioUsuario: DatosUsuarioService)
  {
    this.rutas.params.subscribe(params =>{
      this.usuario = new Usuario();
      this.servicioUsuario.getUsuarioById(params[`id`]).subscribe(usuario1 => {
        this.usuario= usuario1;
      })
    })
  }

  ngOnInit() {
  }

}

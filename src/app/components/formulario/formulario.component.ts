import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicioService } from 'src/app/Services/servicio.service';

@Component({
  selector: 'formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  formulario: FormGroup

  constructor(
    private router: Router,
    private serviciosService: ServicioService
  ) {
    this.formulario = new FormGroup({
      titulo: new FormControl(),
      texto: new FormControl(),
      autor: new FormControl(),
      imagen: new FormControl(),
      fecha: new FormControl(),
      categoria: new FormControl(),
    })
  }

  createPost(form: any) {
    this.serviciosService.createPost(form.value)
    this.router.navigate(['/post'])
  }

  ngOnInit(): void {
  }

}

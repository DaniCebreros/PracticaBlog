import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/interfaces/post.interface';
import { ServicioService } from 'src/app/Services/servicio.service';

@Component({
  selector: 'lista-post',
  templateUrl: './lista-post.component.html',
  styleUrls: ['./lista-post.component.css']
})
export class ListaPostComponent implements OnInit {

  arrPosts: Post[]

  constructor(
    private servicioService: ServicioService
  ) {
    this.arrPosts = this.servicioService.getAll()
  }

  ngOnInit(): void {
  }

  onChange(event: any) {
    this.arrPosts = this.servicioService.getByCategory(event.value)
  }

}

import { Injectable } from '@angular/core';

import { Post } from '../interfaces/post.interface';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  arrPosts: Post[]

  constructor() {
    this.arrPosts = [
      {
        titulo: 'Programación im-posible',
        autor: 'Juanan',
        imagen: 'https://thumbs.dreamstime.com/b/imposible-36300419.jpg',
        texto: 'La programación es posible si le quitas el im',
        categoria: 'Terror',
        fecha: '01/01/2011'
      },

      {
        titulo: 'PingPong terrorífico',
        autor: 'Mario',
        imagen: 'https://previews.123rf.com/images/pasiphae/pasiphae1502/pasiphae150200037/36509492-payaso-femenino-miedo-est%C3%A1-jugando-ping-pong-con-un-ojo.jpg',
        texto: 'Una partida de miedo',
        categoria: 'Comedia',
        fecha: '02-02-2022'
      }
    ]
  }

  createPost(form: any) {
    this.arrPosts.push(form)
  }

  getAll() {
    return this.arrPosts;
  }

  getByCategory(categoria: string) {
    return this.arrPosts.filter(post => post.categoria === categoria)
  }

}

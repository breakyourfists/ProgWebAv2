import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  usuarios = require("../../assets/usuarios.json");

  constructor() { }

  getUsuarios(){   
    return this.usuarios
  }
}

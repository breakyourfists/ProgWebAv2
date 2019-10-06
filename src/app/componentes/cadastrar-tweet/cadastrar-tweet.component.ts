import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-cadastrar-tweet',
  templateUrl: './cadastrar-tweet.component.html',
  styleUrls: ['./cadastrar-tweet.component.css']
})
export class CadastrarTweetComponent implements OnInit {

  constructor(private usuariosService: UsuariosService) { }
  usuarios = [];

  ngOnInit() {
    this.usuarios = this.usuariosService.getUsuarios();
  }

  onSubmit(){
    window.alert("Tweet enviado.");
  }

}

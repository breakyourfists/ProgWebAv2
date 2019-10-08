import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-cadastrar-tweet',
  templateUrl: './cadastrar-tweet.component.html',
  styleUrls: ['./cadastrar-tweet.component.css']
})
export class CadastrarTweetComponent implements OnInit {

  form = new FormGroup({
    imagem: new FormControl('', Validators.required),
    descricao: new FormControl('', Validators.required)
  });

  constructor(private usuariosService: UsuariosService) { }
  usuarios = [];

  ngOnInit() {
    this.usuarios = this.usuariosService.getUsuarios();
  }

  onSubmit(){
    window.alert("Tweet enviado.");
    this.form.reset();
  }

}

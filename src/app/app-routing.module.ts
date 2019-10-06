import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { CadastrarTweetComponent } from './componentes/cadastrar-tweet/cadastrar-tweet.component';


const routes: Routes = [ 
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'principal',component: PrincipalComponent},
  {path: 'cadastrarTweet', component: CadastrarTweetComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

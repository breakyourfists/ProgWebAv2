import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { NewsfeedComponent } from './componentes/newsfeed/newsfeed.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { TweetsService } from './services/tweets.service';
import { CadastrarTweetComponent } from './componentes/cadastrar-tweet/cadastrar-tweet.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewsfeedComponent,
    PrincipalComponent,
    CadastrarTweetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [TweetsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

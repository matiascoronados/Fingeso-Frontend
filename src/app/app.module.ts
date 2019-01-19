import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrearIdeaComponent } from './crear-idea/crear-idea.component';
import { IdeasListComponent } from './ideas-list/ideas-list.component';
import { IdeasEditComponent } from './ideas-edit/ideas-edit.component';
import { FormsModule } from '@angular/forms';
import { RetosListComponent } from './retos-list/retos-list.component';
import { IdeaShowComponent } from './idea-show/idea-show.component';
import { IdearetosListComponent } from './idearetos-list/idearetos-list.component';
import { IdearetosAddComponent } from './idearetos-add/idearetos-add.component';
import { RetosAddComponent } from './retos-add/retos-add.component';
import { ComentarioAddComponent } from './comentario-add/comentario-add.component';

@NgModule({
  declarations: [
    AppComponent,
    CrearIdeaComponent,
    IdeasListComponent,
    IdeaShowComponent,
    IdeasEditComponent,
    RetosListComponent,
    IdearetosListComponent,
    IdearetosAddComponent,
    RetosAddComponent,
    ComentarioAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

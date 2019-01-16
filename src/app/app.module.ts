import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrearIdeaComponent } from './crear-idea/crear-idea.component';
import { IdeasListComponent } from './ideas-list/ideas-list.component';
import { IdeasEditComponent } from './ideas-edit/ideas-edit.component';
import { FormsModule } from '@angular/forms';
import { IdeaShowComponent } from './idea-show/idea-show.component';

@NgModule({
  declarations: [
    AppComponent,
    CrearIdeaComponent,
    IdeasListComponent,
    IdeasEditComponent,
    IdeaShowComponent
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

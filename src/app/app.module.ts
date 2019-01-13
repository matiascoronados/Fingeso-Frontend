import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrearIdeaComponent } from './crear-idea/crear-idea.component';
import { IdeasListComponent } from './ideas-list/ideas-list.component';


@NgModule({
  declarations: [
    AppComponent,
    CrearIdeaComponent,
    IdeasListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

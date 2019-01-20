import { Component, OnInit } from '@angular/core';
import { IdeasService } from '../crear-idea/ideas.service';
import { ComentarioService } from '../crear-idea/comentario.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm, NgControl } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-idea-show',
  templateUrl: './idea-show.component.html',
  styleUrls: ['./idea-show.component.css']
})
export class IdeaShowComponent implements OnInit {
  idOf: string;
  idea: any = {};
  user: any = {};
  sub: Subscription;
  comentarios: Array<any>;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private ideasService: IdeasService,
    private comentariosService: ComentarioService) { }

    funcion(){
    this.router.navigate([this.comentarios]);
    }

  ngOnInit() {
  	this.sub = this.route.params.subscribe(params => {
      const id = params['id'];
      this.idOf=params['id'];
      if (id) {
        this.ideasService.show(id).subscribe((idea: any) => {
          if (idea) {
            this.idea = idea;
            this.idea.href = window.location.href
          } else {
            console.log(`Idea with id '${id}' not found, returning to list`);
            this.gotoList();
          }
        });
        this.ideasService.getUsuario(id).subscribe(data => {this.user = data;});
      }
    });
    this.comentariosService.comentarios(this.idOf).subscribe(data =>{
        this.comentarios = data;
      });
  }

  gotoList() {
    this.router.navigate(['/ideas-list']);
  }

  delete(href: string){
    this.ideasService.remove(href).subscribe(result =>{
      this.gotoList();
    });
  }

  addiVoto(){
    this.ideasService.addVoto(this.idOf).subscribe(result =>{
      this.idea = result;
    });
  }

  deleteComentario(href: string){
    this.comentariosService.removeCom(href).subscribe(result =>{
      window.location.reload();
    });
  }

}

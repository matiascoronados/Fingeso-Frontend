import { Component, OnInit } from '@angular/core';
import { ComentarioService } from '../crear-idea/comentario.service';
import { IdeasService } from '../crear-idea/ideas.service';
import { UsuarioService } from '../crear-idea/usuario.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-comentario-add',
  templateUrl: './comentario-add.component.html',
  styleUrls: ['./comentario-add.component.css']
})
export class ComentarioAddComponent implements OnInit {
  idea: any = {};
  comentario: any = {};
  sub: Subscription;

  constructor(private route: ActivatedRoute,
  			  private router: Router,
  			  private ideasService: IdeasService,
  			  private usuarioService: UsuarioService,
  			  private comentarioService: ComentarioService) { }

  ngOnInit() {
  }

  goToIdea(){
  	window.location.reload();
  }

  save(){
  	this.sub = this.route.params.subscribe(params =>{
  		const id = params['id'];
  		console.log(this.comentario);
  		this.comentarioService.saveComentario(this.comentario, id).subscribe(result => {
  			this.goToIdea();
  		}, error => console.error(error));
  	}
  	);
  }

  

}

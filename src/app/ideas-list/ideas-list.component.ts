import { Component, OnInit } from '@angular/core';
import { IdeasService } from '../crear-idea/ideas.service';


@Component({
  selector: 'app-ideas-list',
  templateUrl: './ideas-list.component.html',
  styleUrls: ['./ideas-list.component.css']
})
export class IdeasListComponent implements OnInit {
  ideas: Array<any>;
  titulo: string;
  
  constructor(private ideasService: IdeasService) { }


  getIdeaByComentarios(){
    this.ideasService.getByComentarios().subscribe(data => {
      this.ideas = data;
      });
    }  

  getIdeaByVotos(){
    this.ideasService.getByVotos().subscribe(data => {
      this.ideas = data;
      });
    }

  getIdeaByFecha(){
    this.ideasService.getByFecha().subscribe(data => {
      this.ideas = data;
      });
    } 

  getIdeaByTitulo(){
    this.ideasService.getByTitulo(this.titulo).subscribe(data => {
    this.ideas = data;
    });
  }

  ngOnInit() {
  	this.ideasService.getAll().subscribe(data => {
  		this.ideas = data;
  	});
  }

}

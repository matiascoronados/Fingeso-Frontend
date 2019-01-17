import { Component, OnInit } from '@angular/core';
import { IdeasService } from '../crear-idea/ideas.service';
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
  sub: Subscription;
  comentarios: Array<any>;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private ideasService: IdeasService) { }

  ngOnInit() {
  	this.sub = this.route.params.subscribe(params => {
      const id = params['id'];
      this.idOf=params['id'];
      if (id) {
        this.ideasService.show(id).subscribe((idea: any) => {
          if (idea) {
            this.idea = idea;
            this.idea.href = window.location.href
            console.log(idea);
          } else {
            console.log(`Idea with id '${id}' not found, returning to list`);
            this.gotoList();
          }
        });
      }
    });
    this.ideasService.comentarios(this.idOf).subscribe(data =>{
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

  getComentarios(){
      this.ideasService.comentarios(this.idOf).subscribe(data =>{
        this.comentarios = data;
      });
  }
}

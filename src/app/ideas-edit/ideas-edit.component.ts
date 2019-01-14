import { Component, OnDestroy ,OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { IdeasService } from '../crear-idea/ideas.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-ideas-edit',
  templateUrl: './ideas-edit.component.html',
  styleUrls: ['./ideas-edit.component.css']
})
export class IdeasEditComponent implements OnInit {
  idea: any = {};

  sub: Subscription;

  constructor(private route: ActivatedRoute,
  			  private router: Router,
  			  private ideasService: IdeasService) { }

  ngOnInit() {
  	this.sub = this.route.params.subscribe(params => {
  		const id = params['id'];
  		if(id){
  			this.ideasService.get(id).subscribe((idea: any) => {
  			 if(idea){
  			  this.idea = idea;
  			  this.idea.href = idea._links.self.href;
  			 } else{
  			 	console.log('Idea with id ',id,' not found,returning to list');
  			 	this.gotoList();
  			 }
  			});
  		}
  	});
  }

  ngOnDestroy(){
  	this.sub.unsubscribe();
  }

  gotoList(){
  	this.router.navigate(['/idea-list']);
  }

  save(form: NgForm) {
  	this.ideasService.save(form).subscribe(result => {
  		this.gotoList();
  	}, error => console.error(error));
  }

  remove(href){
  	this.ideasService.remove(href).subscribe(result => {
  		this.gotoList();
  	}, error => console.error(error));
  }
}

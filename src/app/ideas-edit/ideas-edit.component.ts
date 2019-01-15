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

  constructor(private route: ActivatedRoute,
  			  private router: Router,
  			  private ideasService: IdeasService) { }

  ngOnInit() {
  	
  }


  gotoList(){
  	this.router.navigate(['/ideas-list']);
  }

  save() {
  	this.ideasService.save(this.idea).subscribe(result => {
  		this.gotoList();
  	}, error => console.error(error));
  }

  remove(href){
  	this.ideasService.remove(href).subscribe(result => {
  		this.gotoList();
  	}, error => console.error(error));
  }
}

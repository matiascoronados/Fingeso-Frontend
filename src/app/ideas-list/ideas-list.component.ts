import { Component, OnInit } from '@angular/core';
import { IdeasService } from '../crear-idea/ideas.service';


@Component({
  selector: 'app-ideas-list',
  templateUrl: './ideas-list.component.html',
  styleUrls: ['./ideas-list.component.css']
})
export class IdeasListComponent implements OnInit {
  ideas: Array<any>;
  
  constructor(private ideasService: IdeasService) { }

  ngOnInit() {
  	this.ideasService.getAll().subscribe(data => {
  		this.ideas = data;
  	});
  }

}

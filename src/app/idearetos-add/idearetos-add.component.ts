import { Component, OnDestroy ,OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { IdeasService } from '../crear-idea/ideas.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-idearetos-add',
  templateUrl: './idearetos-add.component.html',
  styleUrls: ['./idearetos-add.component.css']
})
export class IdearetosAddComponent implements OnInit {

  idea: any = {};
  sub: Subscription;

  constructor(private route: ActivatedRoute,
  			  private router: Router,
  			  private ideasService: IdeasService) { }

  ngOnInit() 
  {
  }

  gotoList(){

   this.sub = this.route.params.subscribe(params =>
   {
   		const id = params['id']; 
   		this.router.navigate(['/idearetos-list/'+id]);
   })
   		}

  

   save() {

   this.sub = this.route.params.subscribe(params =>
   {
   		const id = params['id']; 
   		this.ideasService.saveByReto(this.idea, id).subscribe(result => {
      	this.gotoList();
    	}, error => console.error(error));
   }
    )
  }
}

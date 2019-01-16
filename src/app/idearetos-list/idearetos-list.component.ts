import { Component, OnDestroy ,OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { IdeasService } from '../crear-idea/ideas.service';
import { UsuarioService } from '../crear-idea/usuario.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-idearetos-list',
  templateUrl: './idearetos-list.component.html',
  styleUrls: ['./idearetos-list.component.css']
})
export class IdearetosListComponent implements OnInit 
{
  ideas: Array<any>;
  id: string;
  sub: Subscription;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private ideasService: IdeasService) { }

  ngOnInit() 
  {
  	this.sub = this.route.params.subscribe(params => 
  	{
      const id = params['id'];
      this.id = id; 
      this.ideasService.getByReto(id).subscribe(data => 
      {
      this.ideas = data;
      });
    });
  }

}

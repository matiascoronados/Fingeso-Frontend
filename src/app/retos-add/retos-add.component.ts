import { Component, OnDestroy ,OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { IdeasService } from '../crear-idea/ideas.service';
import { RetoService } from '../crear-idea/reto.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-retos-add',
  templateUrl: './retos-add.component.html',
  styleUrls: ['./retos-add.component.css']
})

export class RetosAddComponent implements OnInit {

  reto: any = {};

  constructor(private route: ActivatedRoute,
  			  private router: Router,
  			  private retoService: RetoService) { }

  ngOnInit() {
  }

  gotoList(){
  	this.router.navigate(['/retos-list']);
  }  

  save() {
    this.retoService.save(this.reto).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }


}

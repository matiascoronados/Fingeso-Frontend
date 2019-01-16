import { Component, OnInit } from '@angular/core';
import { RetoService } from '../crear-idea/reto.service';
@Component({
  selector: 'app-retos-list',
  templateUrl: './retos-list.component.html',
  styleUrls: ['./retos-list.component.css']
})
export class RetosListComponent implements OnInit {
	retos: Array<any>;
	titulo: string;

  constructor(private retoService: RetoService) { }

  ngOnInit() {
  	this.retoService.getAll().subscribe(data => {
  		this.retos = data;
  	});
  }

  getRetoByIdeas(){
    this.retoService.getByIdeas().subscribe(data => {
      this.retos = data;
      });
    }  

  getRetoByFecha(){
    this.retoService.getByFecha().subscribe(data => {
      this.retos = data;
      });
    } 

  getRetoByNombre(){
    this.retoService.getByNombre(this.titulo).subscribe(data => {
    this.retos = data;
    });
  }  


}

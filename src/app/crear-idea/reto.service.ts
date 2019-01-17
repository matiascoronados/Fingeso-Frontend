import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class RetoService {

  public API = 'http://localhost:8080';
  public IDEA_API = this.API + '/retos';
  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(this.IDEA_API);
  }

  get(id: string){
  	return this.http.get(this.IDEA_API + '/' + id);
  }

  remove(href: string){
  	return this.http.delete(href);
  }  

  save(reto: any): Observable<any>{
	let result: Observable<Object>;
	result = this.http.post(this.IDEA_API + '/5c3a8a33b41d12063d7dc59d', reto);
	return result;
  }

  getByIdeas(): Observable<any>{
    return this.http.get(this.IDEA_API + '/getRetoByIdeas');
  }

  getByFecha(): Observable<any>{
    return this.http.get(this.IDEA_API + '/getRetoByFecha');
  } 

  getByNombre(nombre: string): Observable<any>{
    return this.http.get(this.IDEA_API + '/' + nombre +'/getRetoByNombre');
  } 

  getByTema(tema: string): Observable<any>{
    return this.http.get(this.IDEA_API + '/' + tema +'/getRetoByTema');
  }   

  getIdeasByReto(idreto: string): Observable<any>{
    return this.http.get(this.IDEA_API + '/' + idreto +'/getRetoByTema');
  }



}

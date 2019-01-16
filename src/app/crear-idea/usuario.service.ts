import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UsuarioService {

  public API = 'http://localhost:8080';
  public IDEA_API = this.API + '/usuarios';
  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(this.IDEA_API);
  }

  get(id: string){
  	return this.http.get(this.IDEA_API + '/' + id);
  }

  save(usuario: any): Observable<any>{
	let result: Observable<Object>;
	result = this.http.post(this.IDEA_API, usuario);
	return result;
  }

  remove(href: string){
  	return this.http.delete(href);
  }

  
  saveIdea(idea: any): Observable<any>{
	let result: Observable<Object>;
	result = this.http.post(this.API + '/usuarios' +'/5c3a8a33b41d12063d7dc59d' + '/addIdea', idea);
	return result;
  }

}

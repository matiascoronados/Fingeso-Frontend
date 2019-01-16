import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IdeasService {
  public API = 'http://localhost:8080';
  public IDEA_API = this.API + '/ideas';
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

    getByComentarios(): Observable<any>{
    return this.http.get(this.IDEA_API + '/getIdeaByComentarios');
  }

  getByVotos(): Observable<any>{
    return this.http.get(this.IDEA_API + '/getIdeaByVotos');
  }

  getByFecha(): Observable<any>{
    return this.http.get(this.IDEA_API + '/getIdeaByFecha');
  } 

  save(idea: any): Observable<any>{
    let result: Observable<Object>;
    result = this.http.post(this.IDEA_API + '/5c3a8a33b41d12063d7dc59d', idea);
    return result;
  }
}

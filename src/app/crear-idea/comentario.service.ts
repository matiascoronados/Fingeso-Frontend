import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {
  public API = 'http://localhost:8080';
  public IDEA_API = this.API + '/comentarios';
  constructor(private http: HttpClient) { }

  comentarios(id: string): Observable<any>{
    return this.http.get(this.API + '/comentarios/' + id);
  }

  saveComentario(comentario: any, id: string): Observable<any>{
  	let result: Observable<Object>;
  	result=this.http.post(this.IDEA_API +'/'+ id + '/5c37ef04aad7321848c71318',comentario);
  	return result;
  }

  removeCom(id: string){
  	return this.http.delete(this.IDEA_API + '/' + id);
  }

}

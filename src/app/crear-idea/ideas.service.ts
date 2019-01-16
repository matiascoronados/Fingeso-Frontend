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
  
  save(idea: any): Observable<any>{
  	let result: Observable<Object>;
    result = this.http.post(this.IDEA_API, idea);
    return result;
  }

  show(id: string): Observable<any>{
    return this.http.get(this.IDEA_API + '/' + id);
  }

  remove(href: string){
  	return this.http.delete(href);
  }
}

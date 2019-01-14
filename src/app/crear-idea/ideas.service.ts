import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IdeasService {
  public API = '//localhost:8080';
  public IDEA_API = this.API + '/ideas';
  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get('//localhost:8080/ideas');
  }

  get(id: string){
  	return this.http.get(this.IDEA_API + '/' + id);
  }

  save(idea: any): Observable<any>{
  	let result: Observable<Object>;
  	if(idea['href']){
  		result = this.http.put(idea.href, idea);
  	}
  	else{
  		result = this.http.post(this.IDEA_API, idea);
  	}
  	return result;
  }

  remove(href: string){
  	return this.http.delete(href);
  }

}

import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
 
@Injectable()
export class ArticlesService {

  constructor(private http: Http) {

   }

   async addNewArticle(article): Promise<any>{

    return this.http.post("http://localhost:3000/articles/",article).toPromise();
  }

  async fetchData(): Promise<any>{
    return this.http.get("http://localhost:3000/articles").toPromise().then(r => r.json());
  }
}

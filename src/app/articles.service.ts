import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestMethod, RequestOptions } from '@angular/http';
import { Article } from './model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise'
import { BoundTextAst } from '@angular/compiler';
 
@Injectable()
export class ArticlesService {

  constructor(private http: Http) {

   }

   articleList: Article[];
   selectedArticle: Article;


   async addNewArticle(articles): Promise<any>{

    console.log(articles);
    return this.http.post("http://localhost:3000/articles/",articles).toPromise();
  }

   async editArticle(id, art): Promise<any>{

    return this.http.put("http://localhost:3000/articles/"+id,art).toPromise();
  }

  async deleteArticle(id: number): Promise<any>{

    if (confirm("Are you sure do you want delete this record") == true)
    {
      return this.http.delete("http://localhost:3000/articles/"+id).toPromise();
    }
  }



  fetchData(){

    this.http.get("http://localhost:3000/articles")
    .map((data : Response) =>{
      return data.json() as Article[];
    }).toPromise().then(x=> {
      this.articleList = x;
    })
  }
}

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

    
    return this.http.post("api/articles/",articles).toPromise();
  }

   async editArticle(id, art): Promise<any>{

    return this.http.put("api/articles/"+id,art).toPromise();
  }

  async deleteArticle(id: number): Promise<any>{

    if (confirm("Are you sure do you want delete this record") == true)
    {
      return this.http.delete("api/articles/"+id).toPromise();
    }
  }



  fetchData(){

    this.http.get("api/articles")
    .map((data : Response) =>{
      return data.json() as Article[];
    }).toPromise().then(x=> {
      this.articleList = x;
    })
  }
}

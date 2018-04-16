import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestMethod, RequestOptions } from '@angular/http';
import { Article } from './model';
import { Category } from './category'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise'
import { BoundTextAst } from '@angular/compiler';
 
@Injectable()
export class ArticlesService {

  constructor(private http: Http) {

   }

   articleList: Article[];
   categoryList: Category[];
   selectedArticle: Article;


   async addNewArticle(articles:Article): Promise<any>{

    //El path del api esta de form relativa y se encuentra en el archivo proxy.conf.json
    //Tambien en el archivo de json package se agrega en la parte de start agregar --proxy-config=proxy.conf.json
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


fetchCategories(){
  this.http.get("api/categories")
    .map((data : Response) =>{
      return data.json() as Category[];
    }).toPromise().then(x=> {
      this.categoryList = x;
    })
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

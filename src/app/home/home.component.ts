import { Component, OnInit } from '@angular/core';
import { Http,Response,Headers } from '@angular/http'; 
import { ArticlesService } from '../articles.service';
import { Article } from '../model'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private articlesService: ArticlesService) { }

  art: Article = new Article();


  CleanArticles(){
    this.art = new Article();
  }


  showEdit: Boolean;

  async fetchData(){
    try{
      
      this.articlesService.fetchData();

    }catch(error)
    {
      alert('No se encuentra el articulo');

    }
  }

  showForEdit(arti: Article)
  {
    this.showEdit = true;
    this.articlesService.selectedArticle = Object.assign({},arti);
    this.art=this.articlesService.selectedArticle;
  }

  async addNewArticle(article){
    var result = await this.articlesService.addNewArticle(article);
    this.articlesService.fetchData();
    this.CleanArticles()

  }

  async editArticle(id, article:Article){
    var result = await this.articlesService.editArticle(id,article);
    this.articlesService.fetchData();
    this.showEdit = false;
  }

  async deleteArticle(id){
    var result = await this.articlesService.deleteArticle(id);
    this.articlesService.fetchData();
  }

  ngOnInit() {
    this.fetchData();
  }

}

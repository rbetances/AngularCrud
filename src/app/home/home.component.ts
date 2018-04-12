import { Component, OnInit } from '@angular/core';
import { Http,Response,Headers } from '@angular/http'; 
import { ArticlesService } from '../articles.service';
import { Article } from '../model'
import { Category } from '../category'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private articlesService: ArticlesService) { }

  art: Article = new Article();
  artEdit:Article = new Article();

  selectedItem: number;

  CleanArticles(){
    this.art = new Article();
  }


  showEdit: Boolean;

  async fetchData(){
    try{
      
      this.articlesService.fetchData();
      this.articlesService.fetchCategories();

    }catch(error)
    {
      alert('No se encuentra el articulo');

    }
  }

  showForEdit(arti: Article)
  {
    
    this.showEdit = true;
    this.articlesService.selectedArticle = Object.assign({},arti);
    this.artEdit = this.articlesService.selectedArticle;
    this.selectedItem = arti.category
  }

  async addNewArticle(article){

    article.category = this.selectedItem;
    var result = await this.articlesService.addNewArticle(article);
    this.articlesService.fetchData();
    this.CleanArticles();

  }

  async editArticle(id, article:Article){
    article.id = this.selectedItem;
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

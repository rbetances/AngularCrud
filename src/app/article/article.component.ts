import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers  } from '@angular/http';
import { ArticlesService } from '../articles.service';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  constructor(private articlesService: ArticlesService) { }

  articles = null;
  async addNewArticle(article){
    var result = await this.articlesService.addNewArticle(article);
    this.articlesService.fetchData();
  }


  ngOnInit() {
  }

}

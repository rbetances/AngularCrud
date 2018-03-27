import { Component, OnInit } from '@angular/core';
import { Http,Response,Headers } from '@angular/http'; 
import { ArticlesService } from '../articles.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private articlesService: ArticlesService) { }

  articles = null;

  async fetchData(){
    try{
      
      this.articles = await this.articlesService.fetchData();

    }catch(error)
    {
      alert('No se encuentra el articulo');
      this.articles = [];
    }
  }

  ngOnInit() {
    this.fetchData();
  }

}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from './post';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  posts:any[];
  post:any;
  titleParam:string;
  
  selectedNewsId() {
    return this.post = this.posts.find((obj)=> {
      return obj.id===1; 
    }
  )}
  selectedStartupsId() {
    return this.post = this.posts.find((obj)=>{
      return obj.id===2;
    })
  }
  selectedHitechId() {
    return this.post = this.posts.find((obj)=>{
      return obj.id===3;
    })
  }


constructor(private route: ActivatedRoute, http: HttpClient) {
  http.get<Array<Post>>('https://jsonplaceholder.typicode.com/photos')
  .subscribe (response=> {
    this.posts =response;
  })
}

  ngOnInit(): void {
     this.route.paramMap.subscribe(params=> {
      this.titleParam = params.get('title')
     })
  }
  

}

import { Component, OnInit } from '@angular/core';
import { TweetsService } from '../../services/tweets.service'
import { Tweet } from '../../classes/Tweet'


@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.css']
})
export class NewsfeedComponent implements OnInit {
  tweets: Tweet[];

  constructor(private tweetsService: TweetsService ) { 
    
  }  

  ngOnInit() {
    this.tweets = this.tweetsService.getTweets();
  }

  getTweetsAtivos(){
    return this.tweets.filter((tweet: Tweet) =>
    tweet.ativo==true
    );    
  }

}

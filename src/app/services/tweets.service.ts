import { Injectable } from '@angular/core';
@Injectable()
export class TweetsService {
  tweets = require("../../assets/tweets.json");

  constructor() { }

  getTweets(){   
    return this.tweets
  }

}
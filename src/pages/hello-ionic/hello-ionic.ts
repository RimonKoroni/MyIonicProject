import { Component } from '@angular/core';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  posts: Array<{title: string, content: string, img: string}>;

  constructor() {

    this.posts = []
    for(let i = 1; i < 7; i++) {
      this.posts.push({
        title: 'Rayan',
        content: 'My first kid :)',
        img: '' + i
      })
    }
  }
}

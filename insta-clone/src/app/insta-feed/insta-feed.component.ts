import { Component } from '@angular/core';
import { posts } from './post';

@Component({
  selector: 'app-insta-feed',
  templateUrl: './insta-feed.component.html',
  styleUrls: ['./insta-feed.component.scss']
})
export class InstaFeedComponent {
  feeds = posts
}

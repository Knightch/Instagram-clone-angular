import { Component } from '@angular/core';
import { stories } from './stories';

@Component({
  selector: 'app-insta-story-tiles',
  templateUrl: './insta-story-tiles.component.html',
  styleUrls: ['./insta-story-tiles.component.scss']
})
export class InstaStoryTilesComponent {
  stories = stories
}

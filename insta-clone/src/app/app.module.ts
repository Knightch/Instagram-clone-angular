import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { InstaTopNavComponent } from './insta-top-nav/insta-top-nav.component';
import { MainScreenComponent } from './main-screen/main-screen.component';
import { BottomNavComponent } from './bottom-nav/bottom-nav.component';
import { InstaStoryTilesComponent } from './insta-story-tiles/insta-story-tiles.component';
import { InstaFeedComponent } from './insta-feed/insta-feed.component';
import { InstaFamiliarComponent } from './insta-familiar/insta-familiar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InstaTopNavComponent,
    MainScreenComponent,
    BottomNavComponent,
    InstaStoryTilesComponent,
    InstaFeedComponent,
    InstaFamiliarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WhoIAmComponent } from './who-i-am/who-i-am.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { EntryVisionComponent } from './entry-vision/entry-vision.component';
import { GalleryComponent } from './gallery/gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WhoIAmComponent,
    AboutComponent,
    FooterComponent,
    EntryVisionComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

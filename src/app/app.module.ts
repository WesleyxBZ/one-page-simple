import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import {
  MdcButtonModule,
  MdcCardModule,
  MdcDrawerModule,
  MdcIconModule,
  MdcListModule,
  MdcMenuModule, MdcRippleModule, MdcSnackbarModule,
  MdcTabBarModule,
  MdcTabScrollerModule,
  MdcTopAppBarModule, MdcTypographyModule
} from '@angular-mdc/web';
import { EntryVisionComponent } from './components/entry-vision/entry-vision.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { GalleryComponent } from './components/gallery/gallery.component';
import { WhoAmComponent } from './components/who-am/who-am.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EntryVisionComponent,
    GalleryComponent,
    WhoAmComponent,
    AboutComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    MdcDrawerModule,
    MdcListModule,
    MdcIconModule,
    MdcTopAppBarModule,
    MdcMenuModule,
    MdcTabScrollerModule,
    MdcTabBarModule,
    MdcCardModule,
    MdcRippleModule,
    MdcTypographyModule,
    FontAwesomeModule,
    RouterModule,
    MdcButtonModule,
    MdcSnackbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

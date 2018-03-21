import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { GalleryObjectComponent } from './gallery/gallery-object/gallery-object.component';

import { MemeService } from './meme.service';
import { HeaderComponent } from './header/header.component';
import { BuilderComponent } from './builder/builder.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    GalleryObjectComponent,
    HeaderComponent,
    BuilderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [MemeService],
  bootstrap: [AppComponent]
})
export class AppModule { }

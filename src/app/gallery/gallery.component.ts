import { Component, OnInit } from '@angular/core';

import { MemeService } from '../meme.service';
import { Meme } from '../meme.model';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  memeList: Meme[];

  constructor(private memeService:MemeService) { }

  ngOnInit() {
    this.memeList = this.memeService.getMemes();
  }

}

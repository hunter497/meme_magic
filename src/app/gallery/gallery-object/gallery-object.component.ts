import { Component, OnInit, Input } from '@angular/core';

import { Meme } from '../../meme.model';

@Component({
  selector: 'app-gallery-object',
  templateUrl: './gallery-object.component.html',
  styleUrls: ['./gallery-object.component.css']
})
export class GalleryObjectComponent implements OnInit {

  @Input()
  meme: Meme;

  constructor() { }

  ngOnInit() {
    console.log(this.meme);
  }

}

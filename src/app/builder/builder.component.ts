import { Component, OnInit } from '@angular/core';

import { Meme } from '../meme.model';
import { MemeService } from '../meme.service';

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.css']
})
export class BuilderComponent implements OnInit {

  meme: Meme;

  constructor(private memeService: MemeService) { }

  ngOnInit() {
    this.memeService.memeSelected.subscribe(
      (meme: Meme) => {
        this.meme = meme;
      }
    )
  }

}

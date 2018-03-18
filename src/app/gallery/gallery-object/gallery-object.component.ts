import { Component, OnInit, Input } from '@angular/core';

import { Meme } from '../../meme.model';
import { MemeService } from '../../meme.service';

import {Router} from '@angular/router';

@Component({
  selector: 'app-gallery-object',
  templateUrl: './gallery-object.component.html',
  styleUrls: ['./gallery-object.component.css']
})
export class GalleryObjectComponent implements OnInit {

  @Input()
  meme: Meme;

  constructor(private memeService: MemeService, private router: Router) { }

  ngOnInit() {
  }

  onMakeMeme() {
    this.memeService.selectedMeme = this.meme;
    this.router.navigateByUrl('/builder');
  }

}

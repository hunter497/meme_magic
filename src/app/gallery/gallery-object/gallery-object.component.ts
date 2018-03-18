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
    console.log(this.meme);
  }

  onMakeMeme() {
    console.log(this.meme);
    this.memeService.memeSelected.emit(this.meme);

    this.router.navigateByUrl('/builder');
  }

}

import { Component, OnInit } from '@angular/core';

import { MemeService } from '../meme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  collapse: boolean = true;

  constructor(private memeService: MemeService) { }

  ngOnInit() {
  }

  onBuilderClick() {
    this.memeService.selectedMeme = this.memeService.getMemes()[6];
  }

}

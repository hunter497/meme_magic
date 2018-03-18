import { Injectable, EventEmitter } from '@angular/core';

import { Meme } from './meme.model';
import { MOCKMEME } from './mock-meme';

@Injectable()
export class MemeService {

    public selectedMeme: Meme = this.getMemes()[0];

    constructor() {}

    public getMemes(): Meme[] {
        return MOCKMEME.slice();
    }

}
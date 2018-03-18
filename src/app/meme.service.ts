import { Injectable, EventEmitter } from '@angular/core';

import { Meme } from './meme.model';
import { MOCKMEME } from './mock-meme';

@Injectable()
export class MemeService {

    public memeSelected = new EventEmitter<Meme>();

    constructor() {}

    public getMemes(): Meme[] {
        return MOCKMEME.slice();
    }

}
import { Injectable } from '@angular/core';
import { DjService } from './dj.service';

@Injectable()
export class Dj1Service extends DjService {
    hello(){
        alert('Hello 1');
    }
}
import { Injectable } from '@angular/core';
import { DjService } from './dj.service';

@Injectable()
export class Dj2Service extends DjService {
    hello(){
        alert('Hello 2');
    }
}
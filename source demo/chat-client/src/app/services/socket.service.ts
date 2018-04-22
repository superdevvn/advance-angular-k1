import { Injectable, EventEmitter } from '@angular/core';
import * as io from 'socket.io-client';

@Injectable()
export class SocketService {

    emitter: EventEmitter<any> = new EventEmitter();
    socket: any;
    constructor() {
        this.socket = io("http://103.232.121.69:3700");

        this.socket.on('connect', () => {
            console.log('connected');
        });
        this.socket.on('disconnect', () => {
            console.log('disconnected');
        });
        this.socket.on('superdev', data => {
            this.emitter.emit(data);
        });
    }
    send(data: any) {
        this.socket.emit('superdev', data);
    }
}
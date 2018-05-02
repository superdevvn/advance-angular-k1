import { Injectable, EventEmitter } from '@angular/core';
import * as io from 'socket.io-client';

@Injectable()
export class SocketService {
    emitter: EventEmitter<any> = new EventEmitter();
    subscribe: any;
    socket: any;
    constructor() {
        this.socket = io('http://103.232.121.69:9001');
        this.socket.on('connect', () => {
            console.log('connected');
        });
        this.socket.on('disconnected', () => {
            console.log('disconnected');
        });
        this.socket.on('superdev', (data: SocketData) => {
            this.emitter.emit(data);
        });

        this.subscribe = this.emitter.subscribe;
        // this.emitter.emit();
    }
    send(data: SocketData) {
        this.socket.emit('superdev', data)
    }
}

export class SocketData {
    code: string;
    data?: any;
}
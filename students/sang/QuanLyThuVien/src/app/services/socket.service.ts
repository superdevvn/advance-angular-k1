import {Injectable, EventEmitter} from '@angular/core';
import * as io from 'socket.io-client';
import { emit } from 'cluster';


@Injectable()
export class SocketService{
    subscribe: any;
    emitter: EventEmitter<any> = new EventEmitter();
    socket: any;
    constructor(){
        this.socket = io('http://103.232.121.69:9001');
        this.socket.on('connect',()=>{
            console.log('connected');
        })
        this.socket.on('disconnected',()=>{
            console.log('disconnected');
        })
        this.socket.on('superdev',(data: SocketData)=>{
            this.emitter.emit(data);
        })
        // this.emitter.emit();
        this.subscribe = this.emitter.subscribe;
    }
    send(data: SocketData){
        this.socket.emit('superdev',data)
    }

    
}

export class SocketData{
    code: string;
    data?: any;
}
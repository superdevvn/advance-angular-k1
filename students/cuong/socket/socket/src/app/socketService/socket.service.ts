import { Injectable } from "@angular/core";
import * as io from 'socket.io-client';
import {EventEmitter} from '@angular/core';
@Injectable()
export class SocketService{
 emiter : EventEmitter<any> = new EventEmitter();
 socket: any;
 constructor(){
     this.socket =  io("http://103.232.121.69:9001");
     this.socket.on('connect',()=>{
         console.log('connected');
     });
     this.socket.on('disconect', ()=>{
         console.log('disconected');
     });
     this.socket.on('superdev', (data : socketData)=>{
        this.emiter.emit(data);
     });
 }
 send(data: socketData){
     this.socket.emit('superdev', data);
 }
}
export class socketData{
    code: string;
}
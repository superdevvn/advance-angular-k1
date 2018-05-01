import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SocketService, SocketData } from '../../services/socket.service';
import * as $ from 'jquery';
@Component({
  selector: 'app-demo-socket',
  templateUrl: './demo-socket.component.html',
  styleUrls: ['./demo-socket.component.css']
})
export class DemoSocketComponent implements OnInit {
  message: string;
  username: string;
  messages: any[] = [];
  @ViewChild('boxChatRef') boxChat: ElementRef;
  constructor(private socketService: SocketService) { 
    this.socketService.emitter.subscribe((socketData: SocketData)=>{
      if(socketData.code === "CHAT")
      {
        this.messages.push(socketData.data)
        setTimeout(() => {
          $(this.boxChat.nativeElement).scrollTop($(this.boxChat.nativeElement).prop("scrollHeight"));
        }, 1000);
        //$(this.boxChat.nativeElement).append(`<span class="user">${socketData.data.username}:</span> 
        //<span class="message">${socketData.data.message}</span><br>`)
      }
    })
  }

  ngOnInit() {
  }

  send(){
    // $(this.boxChat.nativeElement).append(`<span class="user">${this.username}:</span>
    // <span class="message"> ${this.message}</span> <br>`)
    this.messages.push({
      username:this.username,
      message: this.message
    })
    this.socketService.send({
      code:"CHAT",
      data: {
        username:this.username,
        message: this.message
      }
    })
  }
}

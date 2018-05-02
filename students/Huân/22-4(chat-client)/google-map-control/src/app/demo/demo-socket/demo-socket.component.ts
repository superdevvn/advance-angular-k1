import { Component, OnInit } from '@angular/core';
import { SocketService, SocketData } from '../../service/socket.service';

@Component({
  selector: 'app-demo-socket',
  templateUrl: './demo-socket.component.html',
  styleUrls: ['./demo-socket.component.css']
})
export class DemoSocketComponent implements OnInit {
  message: string;
  username: string;
  messages: any[] = [];
  constructor(private socketService: SocketService) {
    this.socketService.emitter.subscribe((socketData: SocketData) => {
      if (socketData.code == "CHAT") {
        this.messages.push(socketData.data); //
        //console.log(`${socketData.data.username}: ${socketData.data.message}`)
      }
    });
  };

  ngOnInit() {
  }
  send() {
    this.messages.push({
      username: this.username,
      message: this.message
    })
    this.socketService.send({
      code: "CHAT",
      data: {
        username: this.username,
        message: this.message
      }
    });
  }
}

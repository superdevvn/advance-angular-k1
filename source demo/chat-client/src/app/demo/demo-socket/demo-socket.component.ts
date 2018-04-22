import { Component, OnInit } from '@angular/core';
import { SocketService, SocketData } from '../../services/socket.service';

@Component({
  selector: 'app-demo-socket',
  templateUrl: './demo-socket.component.html',
  styleUrls: ['./demo-socket.component.css']
})
export class DemoSocketComponent implements OnInit {
  username: string;
  message: string;
  constructor(private socketService: SocketService) { 
    this.socketService.emitter.subscribe((socketData: SocketData)=>{
      if(socketData.code === "CHAT"){
        console.log(`${socketData.data.username}: ${socketData.data.message}`);
      }
    });
  }

  ngOnInit() {
  }
  send(){
    this.socketService.send({
      code: "CHAT",
      data: {
        username: this.username,
        message: this.message
      }
    });
  }
}

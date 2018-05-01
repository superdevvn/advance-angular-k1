import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../services/utility.service';
import { LoginService } from '../login/login.service';
import { Router } from '@angular/router';
import { SocketService, SocketData } from '../services/socket.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  users: any[] = [];
  username: string;
  userInfo: SocketData = {
    code:"",
    data:{
      users:[]
    }};
  userArray: string[] =[]
  constructor(private utilityService: UtilityService, private loginService: LoginService,
    private router: Router, private socketService :SocketService) {
      
      this.username = loginService.getUser();
      this.userArray.push(this.username);
      this.userInfo.code="Login";
      this.userInfo.data.users= this.userArray;
      this.socketService.emitter.subscribe((socketData: SocketData)=>{
        if(socketData.code=="Login"){
          this.users.forEach((element: SocketData) => {
            if (element.data == this.userInfo.data)
              loginService.logout();
          });
        }
      })

  }
  ngOnInit() {

    this.loginService.getAuthorize().catch(err=>{
      this.router.navigate(['login']);
    });
  }
  logout() {
    this.loginService.logout();
  }
  sendUserInfo(){
    this.users.push({
      username: this.username
    })
    this.socketService.send({
      code:"Login",
      data:{
        users: this.users
      }
    })
  }
  alert(){
    console.log(this.users)
    console.log(this.username)
    console.log(this.userArray)
    console.log(this.userInfo);
  }

}

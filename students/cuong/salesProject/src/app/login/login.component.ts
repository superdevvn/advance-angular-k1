import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { loginService } from './login.service';
import { LoadingService } from '../loadingService/loading.service';
import { delay } from 'q';
import swal from "sweetalert2";
import { NotificationService } from '../loadingService/notification.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  constructor(private router: Router, private loginService: loginService, private loadingService: LoadingService,
    private notificationService: NotificationService) { }
  isRemember: boolean = false;
  ngOnInit() {

  }
  login() {
    this.loadingService.start();
    this.loginService.login(this.username, this.password, this.isRemember).then(() => {
      this.loadingService.stop();
      this.notificationService.success("login success");
      this.router.navigate(["/main"]);
    }).catch(err => {
      this.loadingService.stop();
      this.notificationService.success("login failed");
    });
  }

}

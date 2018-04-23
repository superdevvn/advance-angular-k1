import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from '../../loadingService/notification.service';
import { UserService } from './user.service';
import { LoadingService } from '../../loadingService/loading.service';
import swal from "sweetalert2";
declare var $: any;
declare var Core: any;
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',

})
export class UserListComponent implements OnInit {
  users: any[];
  constructor(private userService: UserService, private router: Router, private notificationService: NotificationService, private loadingService: LoadingService) { }

  ngOnInit() {
    this.userService.getUsers().then((customers: any) => {
      this.users = customers;
      console.log(this.users);
    });
  }
  detail(user) {
    this.router.navigate(["/main/user-detail", user.Id]);
  }
  create() {
    this.router.navigate(["/main/user-detail", 0]);
  }
  delete(user) {

    this.notificationService.confirm('delete success').then(res => {
      this.loadingService.start();
      this.userService.deleteUser(user.Id).then((res: any) => {
        this.loadingService.stop();
        this.userService.getUsers().then((customers: any) => {
          this.users = customers;
          console.log(this.users);
        });
      }).catch(err => {
        this.loadingService.stop();
        this.notificationService.error('delete fail');
        this.router.navigate(["/main/user-list"]);
      })
    }).catch(err => {
      swal("Good job!", "", "error");
    });

  }
}

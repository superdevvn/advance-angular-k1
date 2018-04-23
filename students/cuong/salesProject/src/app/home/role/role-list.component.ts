import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoleService } from './role.service';
import { LoadingService } from '../../loadingService/loading.service';
import { NotificationService } from '../../loadingService/notification.service';
import swal from "sweetalert2";
@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.css']
})
export class RoleListComponent implements OnInit {
  roles: any[];
  constructor(private router: Router, private roleService: RoleService, private loadingService: LoadingService
    , private notificationService: NotificationService) { }

  ngOnInit() {
    this.roleService.getRoles().then((roles: any) => {
      this.roles = roles;
      console.log(this.roles);
    });
  }
  detail(product) {
    this.router.navigate(["/main/role", product.Id]);
  }
  create() {
    this.router.navigate(["/main/role", 0]);
  }
  delete(role) {
    this.notificationService.confirm('delete success').then(res => {
      this.loadingService.start();
      this.roleService.deleteRole(role.Id).then((res: any) => {
        this.loadingService.stop();
        this.notificationService.success('delete success');
        this.roleService.getRoles().then((roles: any) => {
          this.roles = roles;
          console.log(this.roles);
        });
      }).catch(err => {
        this.loadingService.stop();
        this.notificationService.error('delete fail');
        this.router.navigate(["/main/role-list"]);
      })
    }).catch(err => {
      swal("", "", "error");
    })

  }
}

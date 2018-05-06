import { Component, OnInit } from '@angular/core';
import { RoleService } from './role.service';
import { Router } from "@angular/router"
import { LoadingService } from '../services/loading.service';
import { ApiService } from '../services/api.service';
import { NotificationService } from '../services/notification.service';
import { SocketService, SocketData } from '../services/socket.service';
import { ExcelService } from '../services/excel.service';
@Component({
  selector: 'role-list',
  templateUrl: './role-list.component.html'
})
export class RoleListComponent implements OnInit {
  roles: any[];
  constructor(private roleService: RoleService, private router: Router, private loadingService: LoadingService,
    private apiService: ApiService, private notification: NotificationService,
    private socketService: SocketService,
    private excelService: ExcelService) {
    this.socketService.emitter.subscribe((socketData: SocketData) => {
      if (socketData.code === 'ROLE_CREATE' || socketData.code === 'ROLE_UPDATE' || socketData.code === 'ROLE_DELETE') {
        this.roleService.getRoles().then((roles: any) => {
          this.roles = roles;
        })
      }
    })
  }

  ngOnInit() {
    this.roleService.getRoles().then((roles: any[]) => {
      this.roles = roles;
      this.loadingService.stop();

    }).catch(err => {
      alert(err);
      this.loadingService.stop();
    })
  }

  detail(role) {

    this.router.navigate(["/main/role-detail", role.Id]);
  }

  create() {
    this.router.navigate(["/main/role-detail", 0]);
  }

  delete(role) {
    this.roleService.deleteRole(role.Id).then(() => {
      this.socketService.send({
        code: 'ROLE_DELETE'
      });
      this.roleService.getRoles().then((roles: any[]) => {
        this.roles = roles;
      });
      this.notification.danger('Deleted');
    });
  }

  importExcel(){
    this.excelService.import().then(items=>{
      console.log(items);
    });
  }

  exportExcel(){
    this.excelService.export({
      data: this.roles,
      sheetName: 'Peter',
      fileName: 'SuperDev'
    });
  }
}

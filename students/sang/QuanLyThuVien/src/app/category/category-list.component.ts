import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"
import { LoadingService } from '../services/loading.service';
import { ApiService } from '../services/api.service';
import { NotificationService } from '../services/notification.service';
import { CategoryService } from './cate.service';
import { SocketService, SocketData } from '../services/socket.service';
@Component({
  selector: 'category-list',
  templateUrl: './category-list.component.html'
})
export class CategoryListComponent implements OnInit {
cates: any[];
  constructor(private categoryService: CategoryService, private router:Router, private loadingService: LoadingService,
  private apiService:ApiService, private Notification:NotificationService,private socketService: SocketService) { 
    this.socketService.emitter.subscribe((socketData: SocketData)=>{
      if(socketData.code == 'CATE_CHANGE' || socketData.code == 'CATE_CREATE' || socketData.code == 'DELETE')
      {
        this.categoryService.getCategories().then((cates: any)=>{
          this.cates = cates;
        })
      }
    })
  }

  ngOnInit() {
    this.categoryService.getCategories().then((cates:any[])=>{
    this.cates = cates;
    this.loadingService.stop();

    }).catch(err=>{
      alert(err);
      this.loadingService.stop();
    })
    }

    detail(role){

      this.router.navigate(["/main/category-detail",role.Id]);
    }

    create(){
      this.router.navigate(["/main/category-detail",0]);
    }

    delete(cate) {
      this.categoryService.deleteRole(cate.Id).then(() => {
        this.socketService.send({
          code:'DELETE'
        })
        this.categoryService.getCategories().then((cates: any[]) => {
          this.cates = cates;
        });
      });
      this.Notification.danger('Deleted');
    }

    
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from '../services/notification.service';
import { ApiService } from '../services/api.service';
import { CategoryService } from './cate.service';
import { SocketService } from '../services/socket.service';

@Component({
  selector: 'category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css']
 
})
export class CategoryDetailComponent implements OnInit {

  routerSubscription: any;
  role: any={};
  id: number;
  title:String='';
  constructor(private categoryService:CategoryService, private route:ActivatedRoute, private router: Router,
     private notification: NotificationService, private apiService:ApiService,
     private socketService: SocketService) {
      }

  ngOnInit() {
this.routerSubscription = this.route.params.subscribe(params=>{
  this.id = +params['id']; //convert string 'id' to a number
  if (this.id >0)
  {
  this.title="You are editting a category";
  this.categoryService.getCategory(this.id).then(res=>{
    this.role = res;
    console.log(this.role);
  })
}
else this.title="You are creating a new category";
})
  
}

save(){
  this.categoryService.saveCategory(this.role).then((res:any)=>{
    if(this.id ===0) 
    {
      this.socketService.send({
        code:'CATE_CREATE'
      })
      this.router.navigate(["/main/role-detail",res.Id]);
      this.notification.success('Created');
    }
    else{
      this.socketService.send({
        code:'CATE_CHANGE'
      })
      this.router.navigate(["/main/category-list"]);
      this.notification.info('Updated')
    }
    
  })
}
back(){
  this.router.navigate(["/main/category-list"]);
}

ngOnDestroy(){
  this.routerSubscription.unsubscribe();
}


  
}
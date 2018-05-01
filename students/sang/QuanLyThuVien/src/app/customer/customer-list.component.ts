import { Component, OnInit } from '@angular/core';

import {Router} from "@angular/router"
import { LoadingService } from '../services/loading.service';
import { ApiService } from '../services/api.service';
import { NotificationService } from '../services/notification.service';
import { CustomerService } from './customer.service';
import { iGridOption } from '../control/grid-control/grid-control.model';
import { Http } from '@angular/http';
@Component({
  selector: 'customer-list',
  templateUrl: './customer-list.component.html'
})
export class CustomerListComponent implements OnInit {
customers: any[];
gridOption: iGridOption
  constructor(private customerService: CustomerService, private router:Router,
     private loadingService: LoadingService, private http:Http,
  private apiService:ApiService, private Notification:NotificationService) { }

  ngOnInit() {
    this.customerService.getCustomers().then((customer:any[])=>{
    this.customers = customer;
    this.loadingService.stop();

    }).catch(err=>{
      alert(err);
      this.loadingService.stop();
    })

    this.gridOption = {
      url: 'http://103.232.121.69:5201/api/getCustomers/',
      commands: [
        { icon: 'fa fa-edit text-primary', click: this.detail },
        { icon: 'fa fa-trash text-danger', click: this.delete }],
      columns: [
        { field: 'Code', title: 'Code', width: '100px', type: 'string' },
        { field: 'First Name', title: 'First Name', width: '', type: 'string' },
        { field: 'Last Name', title: 'Last Name', width: '100px', type: 'string' },
        { field: 'Description', title: 'Description ', width: '100px', type: 'string' },
      ]
    }
    }

    detail(customer){
      this.router.navigate(["/main/customer-detail",customer.Id]);
    }

    create(){
      this.router.navigate(["/main/customer-detail",0]);
    }

    delete(customer) {
      this.customerService.deleteRole(customer.Id).then(() => {
        this.customerService.getCustomers().then((customers: any[]) => {
          this.customers = customer;
        });
      });
      this.Notification.danger('Deleted');
    }


    
}

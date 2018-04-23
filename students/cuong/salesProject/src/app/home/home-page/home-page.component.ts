import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category/category.service';
import { ProductService } from '../product/product.service';
import { CustomerService } from '../customer/customer.service';
import { OrderService } from '../customer/order.service';
import { RoleService } from '../role/role.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  numOfProduct:number;
  numOfOrder:number;
  numOfCustomer:number;
  numOfRole:number;
  constructor(private orderService:OrderService, private productService: ProductService, 
    private customerService:CustomerService, private roleService: RoleService) { }

  ngOnInit() {
      this.productService.getProducts().then((products:any)=>{
        this.numOfProduct = products.length; 
      });
      this.customerService.getcustomers().then((customers:any)=>{
        this.numOfCustomer = customers.length; 
      });
      this.orderService.getOrders().then((orders:any)=>{
        this.numOfOrder = orders.length; 
      });
      this.roleService.getRoles().then((roles:any)=>{
        this.numOfRole = roles.length; 
      });
  }

}

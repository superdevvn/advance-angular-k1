import { Component, OnInit } from '@angular/core';
import { OrderService } from '../customer/order.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CustomerService } from '../customer/customer.service';
import { ProductService } from '../product/product.service';
import * as jquery from 'jquery';
import { LoadingService } from '../../loadingService/loading.service';
import { NotificationService } from '../../loadingService/notification.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {
  order: any = {};
  customers: any[];
  products: any[];
  id: number = 0;
  routerSubcription: any;
  title = '';
  constructor(private orderService: OrderService, private router: Router, private route: ActivatedRoute, private customerService: CustomerService
    , private productService: ProductService, private loadingService: LoadingService, private notificationService: NotificationService) { }

  ngOnInit() {
    this.routerSubcription = this.route.params.subscribe(params => {
      this.customerService.getcustomers().then((res: any[]) => {
        this.customers = res;
        console.log(this.customers);
        if (this.id == 0) {
          this.order.CustomerId = this.customers[0].Id;
        }
      }).catch(err => {
        console.log(err);
      });
      this.productService.getProducts().then((res: any[]) => {
        this.products = res;
        if (this.id == 0) {
          this.order.ProductId = this.products[0].Id;
        }
      }).catch(err => {
        console.log(err);
      });
      this.id = +params['id'];
      if (this.id == 0) {
        this.title = "You are signing up the new Order";
      } else {
        this.orderService.getOrder(this.id).then((res: any) => {
          this.order = res;
          this.title = "You are editing the information";
        }).catch(err => {
          console.log(err);
        })
      }
    });
  }

  save() {
    this.loadingService.start();
    this.orderService.saveOrder(this.order).then((res: any) => {
      this.order = res;
      this.loadingService.stop();
      this.notificationService.success("save success");
    }).catch(err => {
      this.loadingService.stop();
      this.notificationService.error("save failed");
      console.log(err);
    })
  }

  back() {
    this.router.navigate(['/main/order-list']);
  }

  onclick() {
    jquery('#successTable').css('opacity', 1);
    jquery('#successTable').css('transition', '1s');
    setTimeout(() => {
      jquery('#successTable').css('opacity', 0);
      jquery('#successTable').css('transition', '1s');
    }, 4000);
  }
}

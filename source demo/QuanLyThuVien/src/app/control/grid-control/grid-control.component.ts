import { Component, OnInit, Input } from '@angular/core';
import {GridOption, iGridOption} from './grid-control.model'
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Headers, Response } from "@angular/http";
@Component({
  selector: 'app-grid-control',
  templateUrl: './grid-control.component.html',
  styleUrls: ['./grid-control.component.css']
})
export class GridControlComponent implements OnInit {
@Input() option: iGridOption;
  host: string = "http://103.232.121.69:5201";
    token: string = "none";
gridOption: GridOption;
pagingList: number[] =[];

  constructor(private router: Router, private http: Http, private cookieService: CookieService) { 
    this.token = this.cookieService.check('auth-superdev') ? this.cookieService.get('auth-superdev') : "none";
  }

  ngOnInit() {
    this.gridOption = new GridOption();
    this.gridOption.url = this.option.url;
    this.gridOption.data = this.option.data;
    this.gridOption.columns = this.option.columns;
    this.gridOption.commands = this.option.commands;
    this.reload();
    this.generatePaging();
  }
  
  reload(){
    let whereClause = '1>0';
    this.gridOption.columns.forEach(column=>{
      if(column.filterValue)
      {
        if(column.type ==='string')
        {
          whereClause += `AND ${column.field}.Contains("${column.filterValue}")`
        }
      }
    })
    
    let data ={
      pageSize: this.gridOption.pageSize,
      pageNumber: this.gridOption.pageNumber,
      orderBy: this.gridOption.orderBy,
      orderDirection: this.gridOption.orderDirection,
      whereClause: whereClause
    };

    // this.http.post(this.gridOption.url,data)
    // .toPromise()
    // .then(res=>{
    //   this.gridOption.data = res.json().Entities;
    //   this.gridOption.total = res.json().TotalItemCount;
    //   this.gridOption.pageCount = res.json().PageCount;
    //   this.generatePaging;
    // })

    this.post(this.gridOption.url,data)
  }

  generatePaging() {
    if (this.gridOption.pageCount <= 5) {
      this.pagingList = [];
      let t = this.gridOption.pageCount;
      for (let i = 1; i <= t; i++) {
        this.pagingList.push(t);
      }
    }
    else if (this.gridOption.pageNumber <= 3) {
      this.pagingList = [1, 2, 3, 4, 5];
    }
    else if (this.gridOption.pageNumber >= this.gridOption.pageCount - 2) {
      let t = this.gridOption.pageCount;
      this.pagingList = [t - 4, t - 3, t - 2, t - 1, t];
    }
    else {
      let t = this.gridOption.pageCount;
      this.pagingList = [t - 2, t - 1, t, t + 1, t + 2];
    }
  }

  sort(field: string) {
    if(this.gridOption.orderBy === field) 
      this.gridOption.orderDirection = this.gridOption.orderDirection ==='ASC'? 'DESC' : 'ASC';
    else{
      this.gridOption.orderBy = field;
      this.gridOption.orderDirection = 'DESC';
    }
    this.reload();
  }


  post(url: string, data: any) {
    return new Promise<Response>((resolve, reject) => {
        let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
        headers.append("Auth-SuperDev", this.token);
        this.http.post(url, data, { headers: headers })
            .toPromise()
            .then(res => {
                if (res.status == 200 || res.status == 204) {
                    this.gridOption.data = res.json().Entities;
                    this.gridOption.total = res.json().TotalItemCount;
                    this.gridOption.pageCount = res.json().PageCount;
                    this.generatePaging;
                    resolve(res);
                } else {
                    reject("Có lỗi xảy ra");
                }
            }).catch(err => {
                if (err.status == 401) this.router.navigate(["/login"]);
                else reject(err);
            });
    });
}
}

import { Component, OnInit, Input } from '@angular/core';
import { IGridOption, GridOption } from './grid-control.model';
import { Http } from '@angular/http';

@Component({
  selector: 'app-grid-control',
  templateUrl: './grid-control.component.html',
  styleUrls: ['./grid-control.component.css']
})
export class GridControlComponent implements OnInit {
  @Input() option: IGridOption;
  gridOption: GridOption;
  constructor(private http: Http) { }

  ngOnInit() {
    this.gridOption = new GridOption();
    this.gridOption.url = this.option.url;
    this.gridOption.data = this.option.data;
    this.gridOption.commands = this.option.commands;
    this.gridOption.columns = this.option.columns;
    this.reload();
  }

  reload() {
    let data = {
      pageSize: this.gridOption.pageSize,
      pageNumber: this.gridOption.pageNumber,
      orderBy: this.gridOption.orderBy,
      orderDirection: this.gridOption.orderDirection
    };
    this.http.post(this.gridOption.url, data).toPromise()
      .then(res => {
        this.gridOption.total = res.json().TotalItemCount;
        this.gridOption.data = res.json().Entities;
        this.gridOption.pageCount = res.json().PageCount;
      });
  }

  goToPage(pageNumber: number) {
    this.gridOption.pageNumber = pageNumber;
    this.reload();
  }
}

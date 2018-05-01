import { Component, OnInit } from '@angular/core';
import { IGridOption } from '../../grid-control/grid-control.model';
import { Http, Headers } from "@angular/http";
@Component({
  selector: 'app-demo-grid',
  templateUrl: './demo-grid.component.html',
  styleUrls: ['./demo-grid.component.css']
})
export class DemoGridComponent implements OnInit {
  gridOption: IGridOption

  constructor(private http: Http) { }

  ngOnInit() {

    let edit = (item) => {
      console.log(item);
    }

    this.gridOption = {
      url: 'http://103.232.121.69:5111/api/getDemos',
      commands: [
        { icon: 'fa fa-edit text-primary', click: edit },
        { icon: 'fa fa-trash text-danger', click: this.remove }],
      columns: [
        { field: 'Code', title: 'Code Name', width: '100px', type: 'string' },
        { field: 'Name', title: ' Name', width: '', type: 'string' },
        { field: 'Date', title: 'Date', width: '100px', type: 'datetime' },
        { field: 'Salary', title: 'Salary ', width: '100px', type: 'string' },
        { field: 'IsDeleted', title: 'IsActived', width: '100px', type: 'bool', trueValue: 'Deleted', falseValue: 'Actived' }
      ]
    }
  }

  remove = (item) => {
    console.log(item);
  }
}

    // this.gridOption = {
    //   data: [
    //     {
    //       firstName: "Nghia",
    //       lastName: "Tran",
    //       age: "27"
    //     },
    //     {
    //       firstName: "Sang",
    //       lastName: "Nguyen",
    //       age: "21"
    //     }
    //   ],
    //   commands: [],
    //   columns: [
    //     {
    //       field: "firstName",
    //       title: "First Name",
    //       width: "100px"
    //     },
    //     {
    //       field: "lastName",
    //       title: "Last Name",
    //       width: "100px"
    //     },
    //     {
    //       field: "age",
    //       title: "Age ",
    //       width: ""
    //     }
    //   ]
    // }


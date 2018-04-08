import { Component, OnInit } from '@angular/core';
import { IGridOption } from '../../controls/grid-control/grid-control.model';

@Component({
  selector: 'app-demo-grid',
  templateUrl: './demo-grid.component.html',
  styleUrls: ['./demo-grid.component.css']
})
export class DemoGridComponent implements OnInit {
  gridOption: IGridOption;
  constructor() { }

  ngOnInit() {
    this.gridOption = {
      data: [{ firstName: 'Nghia', lastName: 'Tran', age: '27' },
      { firstName: 'Anh', lastName: 'Tuan', age: '21' }],
      commands: [],
      columns: [{ field: 'firstName', title: 'First Name', width: '100px' },
      { field: 'lastName', title: 'Last Name', width: '100px' },
      { field: 'age', title: 'Age', width: '' },]
    };
  }

}

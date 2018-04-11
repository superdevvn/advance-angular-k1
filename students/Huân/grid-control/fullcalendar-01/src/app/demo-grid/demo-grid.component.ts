import { Component, OnInit } from '@angular/core';
import { IGridOption } from '../grid-control/grid-control.model';
import { Http, Headers } from '@angular/http';

@Component({
  selector: 'app-demo-grid',
  templateUrl: './demo-grid.component.html',
  styleUrls: ['./demo-grid.component.css']
})
export class DemoGridComponent implements OnInit {
  gridOption: IGridOption;
  constructor(private http: Http) { }

  ngOnInit() {
    let edit = (item) => {
      console.log(item);
    };
    let headers = new Headers();
    headers.append('Auth-SuperDev', 'T7g4AXn3TCQL77zI8QDi16sORDXScffXXgnQ/mE5P38CESS5LXagKECtX5xw0cD+');
    this.http.post('http://103.232.121.69:5203/api/getUsers', {}, { headers: headers }).
      toPromise()
      .then(res => {
        this.gridOption = {
          data: res.json(),
          commands: [
            { icon: 'fa fa-edit text-primary', click: edit },
            { icon: 'fa fa-trash text-danger', click: this.remove },

          ],
          columns: [
            { field: 'Id', title: 'Id', width: '100px',type : 'number' },
            { field: 'RoleId', title: 'Role ID', width: '100px',type : 'string' },
            { field: 'RoleName', title: 'Role Name', width: '',type : 'string' },
            { field: 'FirstName', title: 'First Nam', width: '' ,type : 'string'},
            { field: 'LastName', title: 'Last Name', width: '' ,type : 'string'},
            { field: 'Description', title: 'Description', width: '',type : 'string' },
            { field: 'IsActived', title: 'Is actived', width: '' ,type : 'string'},

          ],
        }
      }
      )
  }
  remove = (item) => {
    console.log(item);
  }

}

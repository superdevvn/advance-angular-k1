import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Http, Headers } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user = {
    "Role": '',
    "Id": '',
    "RoleId": '',
    "Username": '',
    "Password": '',
    "FirstName": '',
    "LastName": '',
    "Description": '',
    "IsActived": true
  };
  @ViewChild('form') form: NgForm;
  title = 'app';
  constructor(private http: Http) {

  }
  ngOnInit() {
    let headers = new Headers();
    headers.append('Auth-SuperDev', 'T7g4AXn3TCQL77zI8QDi16sORDXScffXXgnQ/mE5P38CESS5LXagKECtX5xw0cD+');
    this.http.get('http://103.232.121.69:5201/api/getUser/1', { headers: headers })
      .toPromise().then(res => {
        this.user = res.json();
        this.form.form.markAsPristine();
      });
  }

  ngAfterViewInit(){
    console.log(this.form.controls);
  }

  save() {
    let headers = new Headers();
    headers.append('Auth-SuperDev', 'T7g4AXn3TCQL77zI8QDi16sORDXScffXXgnQ/mE5P38CESS5LXagKECtX5xw0cD+');
    this.http.post('http://103.232.121.69:5201/api/saveUser', this.user, { headers: headers })
      .toPromise().then(res => {
        this.user = res.json();
        this.form.form.markAsPristine();
      });
  }
}

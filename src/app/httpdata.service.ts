import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpdataService {

  private myurl = "http://jsonplaceholder.typicode.com/users";
postdata='{ "empid":1, "empname":mayuresh, "salary":12345 }';

  constructor(private http: HttpClient) { }
  getData(){
    return this.http.get(this.myurl);
  }
  getHttpData(){
    return this.http.get("http://localhost:8080/emp");
  }

  postHttpData(id, name, sal){
    this.postdata='{ "empid": '+ id +', "empname": "'+ name +'", "salary": '+ sal +'  }';
    console.log(this.postdata);
    return this.http.post("http://localhost:8080/addemp", this.postdata);
  }
}

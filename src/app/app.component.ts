import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpdataService } from './httpdata.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'hello-angular-routing';
  myjson = {"asdf":123, "qwerty":321};
  mydate = new Date();
  fnameFlag=false;

  username=new FormControl('admin')
  password=new FormControl('admin')

  public userdata = [];
  constructor(private myservice: HttpdataService) {}

  ngOnInit(){
    this.myservice.getHttpData().subscribe((data)=> {
      this.userdata = Array.from(Object.keys(data), k=>data[k]);
      console.log(this.userdata);
    });

    this.myservice.postHttpData(12, 'mayureshB', 54321).subscribe((data)=>{
        console.log(data);
    });

  }

  myOnSubmit(){
    alert("Welcome " + this.username.value)
  }
  onFormSubmit(data){
    console.log(data.firstname + "===" + data.lname + "===" + data.email);
    if(data.firstname == null){
      this.fnameFlag=true;
    }
  }
 

}

import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  tmp: string;

  constructor(private data: DataService) { }

  hello() {
    this.data.setTemp(this.tmp);
    console.log(this.data.getTemp());
  }
  ngOnInit(): void {
  }

}

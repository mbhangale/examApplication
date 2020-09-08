import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  tmp: string;
  constructor(private data:DataService) { }

  ngOnInit(): void {
    this.tmp = this.data.getTemp();
  }

}

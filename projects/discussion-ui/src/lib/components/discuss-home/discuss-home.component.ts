import { Component, OnInit } from '@angular/core';
import * as Constants from '../../common/constants.json';

@Component({
  selector: 'lib-discuss-home',
  templateUrl: './discuss-home.component.html',
  styleUrls: ['./discuss-home.component.css']
})
export class DiscussHomeComponent implements OnInit {

  constructor() { }
  
  category: any = (Constants as any).default.categories[0];

  ngOnInit() {
  }

}

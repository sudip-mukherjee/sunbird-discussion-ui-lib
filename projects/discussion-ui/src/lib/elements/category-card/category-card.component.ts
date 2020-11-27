import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.css']
})
export class CategoryCardComponent implements OnInit {

  // TODO: Create interface for type check
  // TODO: pipeRelativeTime needs to be added
  // TODO: replace mat-icon
  @Input() cardData: any;

  constructor() { }

  ngOnInit() {
  }

}


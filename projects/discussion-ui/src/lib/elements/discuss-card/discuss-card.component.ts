import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'lib-discuss-card',
  templateUrl: './discuss-card.component.html',
  styleUrls: ['./discuss-card.component.css']
})
export class DiscussCardComponent implements OnInit {

  @Input() discussionData: any;
  @Output() openTopicDetails = new EventEmitter();

  constructor(public router: Router) { }

  ngOnInit() {
  }

  openDiscussion() {
    const slug = this.discussionData.slug || this.discussionData.topic.slug;
    this.openTopicDetails.emit(slug);
  }

}

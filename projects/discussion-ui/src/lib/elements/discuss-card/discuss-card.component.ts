import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'lib-discuss-card',
  templateUrl: './discuss-card.component.html',
  styleUrls: ['./discuss-card.component.css']
})
export class DiscussCardComponent implements OnInit {

  @Input() discussionData: any;

  constructor(public router: Router) { }

  ngOnInit() {
  }

  openDiscussion() {
    this.router.navigate([`/discussion/home/${this.discussionData.slug || this.discussionData.topic.slug}`]);
  }

}

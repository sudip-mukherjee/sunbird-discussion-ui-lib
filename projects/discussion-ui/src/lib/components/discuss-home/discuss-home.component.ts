import { Component, OnInit } from '@angular/core';
import * as Constants from '../../common/constants.json';
import { Router } from '@angular/router';
import { DiscussionService } from '../../services/discussion.service';

@Component({
  selector: 'lib-discuss-home',
  templateUrl: './discuss-home.component.html',
  styleUrls: ['./discuss-home.component.css']
})
export class DiscussHomeComponent implements OnInit {

  constructor(public router: Router, private discussService: DiscussionService) { }

  topics: any;

  ngOnInit() {
    this.getTopics();
  }
  // http://localhost:4567/api/topic/10/angular-discussions-tab
  getTopics() {
    this.discussService.fetchRecentD().subscribe(res => {
      console.log(res);
      this.topics = res['topics'];
    });
  }

  openTopicDetails(slug) {
    this.router.navigate([`/discussion/home/${slug}`]);
  }
}

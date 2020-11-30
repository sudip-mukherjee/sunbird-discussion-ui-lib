import { DiscussionService } from '../../services/discussion.service';



import { Component, OnInit, ChangeDetectorRef, ViewChild, ElementRef, OnDestroy, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'lib-discussion-details',
  templateUrl: './discussion-details.component.html',
  styleUrls: ['./discussion-details.component.css']
})
export class DiscussionDetailsComponent implements OnInit {
  queryParams: any;
  topicId: any;
  topicDetails;
  constructor(private activatedRoute: ActivatedRoute, private discussService: DiscussionService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.topicId = `${params.topicId}/${params.slug}`;
      // this
      console.log(this.topicId);
      this.getTopicDetails(this.topicId);
    });
  }

  getTopicDetails(topicId) {
    this.discussService.getTopicById(topicId).subscribe(res => {
      console.log(res);
      this.topicDetails = res;
    });
  }
  upvote(post) {

  }
  downvote(post) {

  }
  delteVote(post) {

  }
  bookmark(post) {

  }
  unBookMark(post) {

  }

}

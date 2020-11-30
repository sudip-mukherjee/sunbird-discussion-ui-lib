import { DiscussionService } from './../../services/discussion.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import { NSDiscussData } from '../../models/discuss.model';
// import { ConfigurationsService } from '@ws-widget/utils';

@Component({
  selector: 'lib-my-discussion',
  templateUrl: './my-discussion.component.html',
  styleUrls: ['./my-discussion.component.css']
})
export class MyDiscussionComponent implements OnInit {

  data; // this is for user
  discussionList; // this is for posts
  currentFilter = 'timestamp';
  department!: string | null;
  location!: string | null;
  profilePhoto!: string;

  constructor(public router: Router,
              private route: ActivatedRoute,
              private discussService: DiscussionService, /* private configSvc: ConfigurationsService */) {
    this.fetchNetworkProfile();
  }

  openTopicDetails(slug) {
    this.router.navigate([`/discussion/home/${slug}`]);
  }

  fetchNetworkProfile() {
    this.discussService.fetchNetworkProfile().subscribe(response => {
      console.log(response);
      // TODO: need to update the photo url
      this.profilePhoto = 'http://localhost:4567/assets/uploads/profile/1-profileavatar.png'; // response['uploadedpicture']; // _.get(_.first(response), 'photo');
      this.data = response;
      // if (this.configSvc.userProfile) {
      //   localStorage.setItem(this.configSvc.userProfile.userId, this.profilePhoto);
      // }
    },
      /* tslint:disable */
      () => {
        this.profilePhoto = ''
      })
    /* tslint:enable */
  }

  ngOnInit() {
    // this.data = this.route.snapshot.data.profile.data;
    // this.discussionList = _.uniqBy(_.filter(this.data.posts, p => _.get(p, 'isMainPost') === true), 'tid');
    this.discussionList = this.data.posts.filter(p => (p.isMainPost === true));
    this.department = this.discussService.getUserProfile.departmentName || null;
    this.location = this.discussService.getUserProfile.country || null;
  }
  filter(key: string | 'timestamp' | 'best' | 'saved' | 'watched' | 'upvoted' | 'downvoted') {
    if (key) {
      this.currentFilter = key;
      switch (key) {
        case 'timestamp':
          // this.discussionList = _.uniqBy(_.filter(this.data.posts, p => _.get(p, 'isMainPost') === true), 'tid');
          this.discussionList = this.data.posts.filter(p => (p.isMainPost === true));
          break;
        case 'best':
          // this.discussionList = _.uniqBy(this.data.bestPosts, 'tid');
          this.discussionList = this.data.bestPosts;
          break;
        case 'saved':
          this.discussService.fetchSaved().subscribe(response => {
            if (response) {
              // this.discussionList = _.uniqBy(response['posts'], 'tid');
              this.discussionList = response['posts'];
            } else {
              this.discussionList = [];
            }
          },
            // tslint:disable-next-line
            () => {
              this.discussionList = [];
            });
          break;
        case 'watched':
          this.discussionList = [];
          break;
        case 'upvoted':
          this.discussService.fetchUpvoted().subscribe(response => {
            if (response) {
              // this.discussionList = _.uniqBy(response['posts'], 'tid');
              this.discussionList = response['posts'];
            } else {
              this.discussionList = [];
            }
          },
            // tslint:disable-next-line
            () => {
              this.discussionList = [];
            });

          break;
        case 'downvoted':
          this.discussService.fetchDownvoted().subscribe(response => {
            if (response) {
              // this.discussionList = _.uniqBy(response['posts'], 'tid');
              this.discussionList = response['posts'];
            } else {
              this.discussionList = [];
            }
          },
            // tslint:disable-next-line
            () => {
              this.discussionList = [];
            });
          break;
        default:
          // this.discussionList = _.uniqBy(this.data.latestPosts, 'tid');
          this.discussionList = this.data.latestPosts;
          break;
      }
    }
  }

}

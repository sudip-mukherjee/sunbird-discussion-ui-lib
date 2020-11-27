import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { urlConfig } from './../config/url.config';

const HOST_URL = 'http://localhost:3002';


@Injectable({
  providedIn: 'root'
})
export class DiscussionService {
  usr: any;

  constructor( private http: HttpClient ) {
    // TODO: Take from the logged in user data;
    // this.usr = this.configSvc.userProfile
    this.usr = { userId: '1234' };
  }

  // get getUserProfile() {
  //   return this.usr;
  // }
  appendPage(page: any, url: string) {
    if (page) {
      return `${url}?page=${page}`;
    }
    return `${url}?page=1`;
  }

  fetchAllTags() {
    const tags = this.http.get(urlConfig.getAllTags)
      .toPromise();
    return tags;
  }

  createPost(data: any) {
    return this.http.post(urlConfig.createPost, data);
  }

  fetchAllCategories() {
    return this.http.get(`${HOST_URL}/${urlConfig.getAllCategories}`);
  }
  fetchAllTag() {
    return this.http.get(urlConfig.getAllTags);
  }

  fetchPostDetails() {
    return this.http.get(urlConfig.getAllTags);
  }

  votePost(pid: number, data: any) {
    const url = urlConfig.votePost(pid);
    return this.http.post(url, data);
  }

  deleteVotePost(pid: number) {
    const url = urlConfig.votePost(pid);
    return this.http.delete(url);
  }

  bookmarkPost(pid: number) {
    const url = urlConfig.bookmarkPost(pid);
    return this.http.post(url, {});
  }

  deleteBookmarkPost(pid: number) {
    const url = urlConfig.bookmarkPost(pid);
    return this.http.delete(url);
  }

  replyPost(tid: number, data: any) {
    const url = urlConfig.replyPost(tid);
    return this.http.post(url, data);
  }

  fetchRecentD(page?: any) {
    const url = this.appendPage(page, urlConfig.recentPost);
    return this.http.get(url);
  }
  fetchPopularD(page?: any) {
    const url = this.appendPage(page, urlConfig.popularPost);
    return this.http.get(url);
  }

  fetchTopicById(topicId: number, page?: any) {
    let url = urlConfig.getTopic + topicId.toString();
    url = this.appendPage(page, url);
    return this.http.get(url);
  }

  fetchTopicByIdSort(topicId: number, sort: any, page?: any) {
    let url = urlConfig.getTopic + topicId.toString();
    url = this.appendPage(page, url);
    return this.http.get(`${url}&sort=${sort}`);
  }

  fetchUnreadCOunt() {
    return this.http.get<any>(urlConfig.unread);
  }
  fetchProfile() {
    return this.http.get(urlConfig.profile);
  }
  fetchProfileInfo(slug: string) {
    return this.http.get(urlConfig.fetchProfile(slug));
  }
  fetchUpvoted() {
    return this.http.get(urlConfig.listUpVote(this.usr.userId));
  }
  fetchDownvoted() {
    return this.http.get(urlConfig.listDownVoted(this.usr.userId));
  }
  fetchSaved() {
    return this.http.get(urlConfig.listSaved(this.usr.userId));
  }
  fetchSingleCategoryDetails(cid: number, page?: any) {
    const url = this.appendPage(page, urlConfig.getSingleCategoryDetails(cid));
    return this.http.get(url);
  }
  fetchSingleCategoryDetailsSort(cid: number, sort: any, page?: any) {
    const url = this.appendPage(page, urlConfig.getSingleCategoryDetails(cid));
    return this.http.get(`${url}&sort=${sort}`);
  }
  fetchNetworkProfile() {
    return this.http.get<any>(urlConfig.fetchNetworkProfile);
  }


}

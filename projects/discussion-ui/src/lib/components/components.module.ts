import { ElementsModule } from './../elements/elements.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidePannelComponent } from './side-pannel/side-pannel.component';
import { DiscussHomeComponent } from './discuss-home/discuss-home.component';
import { DiscussCategoryComponent } from './discuss-category/discuss-category.component';
import { DiscussTagsComponent } from './discuss-tags/discuss-tags.component';
import { MyDiscussionComponent } from './my-discussion/my-discussion.component';


@NgModule({
  declarations: [
    SidePannelComponent,
    DiscussHomeComponent,
    DiscussCategoryComponent,
    DiscussTagsComponent,
    MyDiscussionComponent,
  ],
  imports: [
    CommonModule,
    ElementsModule
  ],
  exports: [
    SidePannelComponent,
    DiscussHomeComponent,
    DiscussCategoryComponent,
    DiscussTagsComponent,
    MyDiscussionComponent
  ]
})
export class ComponentsModule { }

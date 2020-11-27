import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryCardComponent } from './category-card/category-card.component';
import { DiscussCardComponent } from './discuss-card/discuss-card.component';
@NgModule({
  declarations: [
    CategoryCardComponent,
    DiscussCardComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    CategoryCardComponent,
    DiscussCardComponent
  ]
})
export class ElementsModule { }

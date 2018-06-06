import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material';

import { HomeComponent } from './home/home.component';
import { PageNotFound } from './page-not-found/page-not-found.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  declarations: [
    HomeComponent,
    PageNotFound,
    HeaderComponent,
    FooterComponent
  ],
  providers: [],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class AppCoreModule { }
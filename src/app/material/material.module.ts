import { NgModule } from '@angular/core';
import {
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule,
  MatCardModule,
  MatButtonModule,
  MatGridListModule,
  MatListModule,
  MatTableModule,
  MatSortModule,
  MatPaginatorModule,
  MatInputModule,
  MatTooltipModule,
  MatChipsModule,
  MatSlideToggleModule
} from '@angular/material';

const MODULES = [
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule,
  MatCardModule,
  MatButtonModule,
  MatGridListModule,
  MatListModule,
  MatTableModule,
  MatSortModule,
  MatPaginatorModule,
  MatInputModule,
  MatTooltipModule,
  MatChipsModule,
  MatSlideToggleModule
];

@NgModule({
  imports: MODULES,
  exports: MODULES,
})
export class MaterialModule { }

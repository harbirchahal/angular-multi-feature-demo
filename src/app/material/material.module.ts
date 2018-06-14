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
  MatCheckboxModule,
  MatTooltipModule,
  MatChipsModule,
  MatSlideToggleModule,
  MatProgressSpinnerModule
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
  MatCheckboxModule,
  MatTooltipModule,
  MatChipsModule,
  MatSlideToggleModule,
  MatProgressSpinnerModule
];

@NgModule({
  imports: MODULES,
  exports: MODULES,
})
export class MaterialModule { }

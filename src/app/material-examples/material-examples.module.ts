import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialExamplesRoutingModule } from './material-examples-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatGridListModule, MatCardModule, MatMenuModule, MatTableModule, MatPaginatorModule, MatSortModule, MatInputModule, MatSelectModule, MatRadioModule } from '@angular/material';
import { DashboardExampleComponent } from './pages/dashboard-example/dashboard-example.component';
import { TableExampleComponent } from './pages/table-example/table-example.component';
import { AddressformExampleComponent } from './pages/addressform-example/addressform-example.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LayoutComponent, DashboardExampleComponent, TableExampleComponent, AddressformExampleComponent],
  imports: [
    CommonModule,
    MaterialExamplesRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    ReactiveFormsModule
  ]
})
export class MaterialExamplesModule { }

import { MatTableComponent } from './mat-table/mat-table.component';
import { MatTreeComponent } from './mat-tree/mat-tree.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddressComponent } from './address/address.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'tree', component: MatTreeComponent },
  { path: 'address', component: AddressComponent },
  { path: 'table', component: MatTableComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

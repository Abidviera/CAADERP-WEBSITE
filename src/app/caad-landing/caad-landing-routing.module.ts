import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PointOfSaleComponent } from './point-of-sale/point-of-sale.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { ERPComponent } from './erp/erp.component';
import { AboutComponent } from './about/about.component';
import { AttendanceManagementComponent } from './attendance-management/attendance-management.component';
import { OpticalSoftwareComponent } from './optical-software/optical-software.component';
import { InventoryManagementComponent } from './inventory-management/inventory-management.component';

const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'home', component: LandingPageComponent},
  {path: 'POS', component: PointOfSaleComponent},
  {path: 'ecommerce', component: EcommerceComponent},
  {path: 'erp', component: ERPComponent},
  {path: 'about', component: AboutComponent},
  {path: 'attendance', component: AttendanceManagementComponent},
  {path: 'optics', component: OpticalSoftwareComponent},
  {path: 'inventory-Management', component: InventoryManagementComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CaadLandingRoutingModule { }

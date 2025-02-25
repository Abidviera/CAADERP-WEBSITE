import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CaadLandingRoutingModule } from './caad-landing-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PointOfSaleComponent } from './point-of-sale/point-of-sale.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { SharedModule } from '../shared/shared.module';
import { ERPComponent } from './erp/erp.component';
import { AboutComponent } from './about/about.component';
import { AttendanceManagementComponent } from './attendance-management/attendance-management.component';
import { OpticalSoftwareComponent } from './optical-software/optical-software.component';
import { InventoryManagementComponent } from './inventory-management/inventory-management.component';


@NgModule({
  declarations: [
    LandingPageComponent,
    PointOfSaleComponent,
    EcommerceComponent,
    ERPComponent,
    AboutComponent,
    AttendanceManagementComponent,
    OpticalSoftwareComponent,
    InventoryManagementComponent,
    
  ],
  imports: [
    CommonModule,
    CaadLandingRoutingModule,
    SharedModule
  ]
})
export class CaadLandingModule { }

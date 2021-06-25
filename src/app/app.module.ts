import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

//* ****
  import {  MatTableModule } from "@angular/material/table";
////////


import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import {
  AgmCoreModule
} from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { MonCompComponent } from './mon-comp/mon-comp.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { CategoryComponent } from './category/category.component';
import { ProductsComponent } from './products/products.component';
import { CustomersComponent } from './customers/customers.component';
import { ProviderComponent } from './provider/provider.component';
import { OrderSaleComponent } from './order-sale/order-sale.component';
import { PurchaseOrderComponent } from './purchase-order/purchase-order.component';
import { PaymentsComponent } from './payments/payments.component';

import { BrowserModule } from '@angular/platform-browser';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';


import { CreateProviderComponent } from './create-provider/create-provider.component';
import { UpdateProviderComponent } from './update-provider/update-provider.component';
import { ProviderService } from './service/provider.service';
import { CustomerServicesService } from './services/customer-services.service';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import { AddOrEditOrderSaleComponent } from './add-or-edit-order-sale/add-or-edit-order-sale.component';
import { CreatePurchaseOrderComponent } from './create-purchase-order/create-purchase-order.component';
import { AddPaymentComponent } from './add-payment/add-payment.component';
import { LineSaleComponent } from './line-sale/line-sale.component';
import { LinesBuysComponent } from './lines-buys/lines-buys.component';
<<<<<<< HEAD
import { SecurityService } from './security/security.service';
import { LoginComponent } from './security/login/login.component';

=======
import { AddLineSaleComponent } from './add-line-sale/add-line-sale.component';
import { AddLineBuyComponent } from './add-line-buy/add-line-buy.component';
>>>>>>> 424f1b9596ce095f8a61a78adeeb1899f58f3ebb


@NgModule({
  imports: [
    
   
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    ComponentsModule,
    RouterModule,
    MatPaginatorModule,

    BrowserModule,
    BrowserAnimationsModule,
    
    FormsModule,

    MatTableModule,
    HttpClientModule,
   
    
    //
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    }),
   
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    MonCompComponent,
    InvoiceComponent,
    CategoryComponent,
    ProductsComponent,
    CustomersComponent,
    ProviderComponent,
    OrderSaleComponent,
    PurchaseOrderComponent,
    PaymentsComponent,
    CreateProviderComponent,
    UpdateProviderComponent,
   
    CreateCustomerComponent,
    UpdateCustomerComponent,
    AddOrEditOrderSaleComponent,
    CreatePurchaseOrderComponent,
    AddPaymentComponent,
    LineSaleComponent,
    LinesBuysComponent,
<<<<<<< HEAD
    // SecurityService,
    LoginComponent,
=======
    AddLineSaleComponent,
    AddLineBuyComponent
>>>>>>> 424f1b9596ce095f8a61a78adeeb1899f58f3ebb
  
    

  ],
  providers: [ProviderService,CustomerServicesService,SecurityService],
  bootstrap: [AppComponent],
  
})
export class AppModule { }

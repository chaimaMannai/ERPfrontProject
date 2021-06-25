import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { MonCompComponent } from 'app/mon-comp/mon-comp.component';
import { InvoiceComponent } from 'app/invoice/invoice.component';
import { CategoryComponent } from 'app/category/category.component';
import { ProductsComponent } from 'app/products/products.component';
import { CustomersComponent } from 'app/customers/customers.component';
import { ProviderComponent } from 'app/provider/provider.component';
import { OrderSaleComponent } from 'app/order-sale/order-sale.component';
import { PurchaseOrderComponent } from 'app/purchase-order/purchase-order.component';
import { PaymentsComponent } from 'app/payments/payments.component';
import { AddOrEditOrderSaleComponent } from 'app/add-or-edit-order-sale/add-or-edit-order-sale.component';
import { CreatePurchaseOrderComponent } from 'app/create-purchase-order/create-purchase-order.component';
import { CreateProviderComponent } from 'app/create-provider/create-provider.component';
import { UpdateProviderComponent } from 'app/update-provider/update-provider.component';
import { AddPaymentComponent } from 'app/add-payment/add-payment.component';
import { LineSaleComponent } from 'app/line-sale/line-sale.component';
import { CreateCustomerComponent } from 'app/create-customer/create-customer.component';
import { LinesBuysComponent } from 'app/lines-buys/lines-buys.component';
<<<<<<< HEAD
import { LoginComponent } from 'app/security/login/login.component';
=======
import { AddLineSaleComponent } from 'app/add-line-sale/add-line-sale.component';
import { AddLineBuyComponent } from 'app/add-line-buy/add-line-buy.component';
import { UpdateCustomerComponent } from 'app/update-customer/update-customer.component';
>>>>>>> 424f1b9596ce095f8a61a78adeeb1899f58f3ebb

export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    { path: 'monComp',        component: MonCompComponent },
    { path: 'Invoice',        component: InvoiceComponent },
    { path: 'Stock',        component: CategoryComponent },
    { path: 'Products',        component: ProductsComponent },
    { path: 'Customers',        component: CustomersComponent },
    { path: 'Provider',        component: ProviderComponent },
    { path: 'Order-Sale',        component: OrderSaleComponent },
    { path: 'Purchase-Order',        component: PurchaseOrderComponent },
    { path: 'Payments',        component: PaymentsComponent },
    { path: 'addOrEditOrderSale',        component: AddOrEditOrderSaleComponent },
    { path: 'createPurchaseOrder', component: CreatePurchaseOrderComponent },
    { path: 'create-provider', component: CreateProviderComponent},
    { path: 'update-provider/:id', component: UpdateProviderComponent},
    { path: 'addPayment', component: AddPaymentComponent},
    { path: 'linesSales/:number', component: LineSaleComponent},
    { path: 'linesBuys/:number', component: LinesBuysComponent},
<<<<<<< HEAD
    { path: 'login', component: LoginComponent},

  

=======
    { path: 'addLineSale', component: AddLineSaleComponent},
    { path: 'addLineSale/:number', component: AddLineSaleComponent},
    { path: 'addLineBuy/:number', component: AddLineBuyComponent},
    {path:'create-customer',component:CreateCustomerComponent},
    {path:'update-customer/:id',component:UpdateCustomerComponent},
>>>>>>> 424f1b9596ce095f8a61a78adeeb1899f58f3ebb
   
    


    


];

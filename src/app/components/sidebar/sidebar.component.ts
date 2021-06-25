import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: '/Invoice', title: 'Invoice',  icon:'receipt', class: '' },
    { path: '/Stock', title: 'Stock',  icon:'category', class: '' },
    { path: '/Products', title: 'Product',  icon:'local_mall', class: '' },
    { path: '/Customers', title: 'Customer',  icon:'groups', class: '' },
    { path: '/Provider', title: 'Provider',  icon:'transfer_within_a_station', class: '' },
    { path: '/Order-Sale', title: 'Sale-Order',  icon:'add_shopping_cart', class: '' },
    { path: '/Purchase-Order', title: 'Purchase-Order',  icon:'shopping_cart', class: '' },
    { path: '/Payments', title: 'Payments',  icon:'payments', class: 'active-pro' },
    { path: '/addOrEditOrderSale', title: 'Add Order Sale',  icon:'', class: '' },
    { path: '/createPurchaseOrder', title: 'Add Purchase Order',  icon:'', class: ''},
    { path: '/create-provider', title: ' Provider',  icon:'', class: '' },
    { path: '/update-provider/:id', title: ' Provider',  icon:'', class: ''},
    { path: '/addPayment',  title: 'Add Payment',  icon:'', class: ''},
    { path: '/linesSales/:number',  title: 'LinesSales',  icon:'', class: ''},
    { path: '/linesBuys/:number',  title: 'LinesBuys',  icon:'', class: ''},
    { path: '/addLineSale',title: 'addLineSale',  icon:'', class: '' },
    { path: 'addLineSale/:number' ,title: 'Linessales',  icon:'', class: ''},
    { path: 'addLineBuy/:number' ,title: 'LinesBuys',  icon:'', class: ''},
    {path:'create-customer', title: 'Customer' ,  icon:'', class: ''},
    {path:'update-customer/:id', title: 'update Customer',  icon:'', class: ''},
   
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}

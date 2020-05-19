import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaymentOrderPage } from './payment-order.page';

const routes: Routes = [
  {
    path: '',
    component: PaymentOrderPage
  },
  {
    path: 'order-detail',
    loadChildren: () => import('./order-detail/order-detail.module').then( m => m.OrderDetailPageModule)
  },
  {
    path: 'add-order',
    loadChildren: () => import('./add-order/add-order.module').then( m => m.AddOrderPageModule)
  },
  {
    path: 'order-history',
    loadChildren: () => import('./order-history/order-history.module').then( m => m.OrderHistoryPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaymentOrderPageRoutingModule {}

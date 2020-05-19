import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'payment-order',
    pathMatch: 'full'
  },
  {
    path: 'payment-order',
    children:[
      {
        path: "",
        loadChildren: () => import('./payment-order/payment-order.module').then( m => m.PaymentOrderPageModule)
      },
      {
        path: ":orderId",
        loadChildren: () => import('./payment-order/order-detail/order-detail.module').then(m => m.OrderDetailPageModule)
      }
    ]
  },
  {
    path: 'add-order',
    loadChildren: () => import('./payment-order/add-order/add-order.module').then( m => m.AddOrderPageModule)
  },
  {
    path: 'order-history',
    loadChildren: () => import('./payment-order/order-history/order-history.module').then(m => m.OrderHistoryPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

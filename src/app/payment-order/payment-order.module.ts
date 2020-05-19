import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaymentOrderPageRoutingModule } from './payment-order-routing.module';

import { PaymentOrderPage } from './payment-order.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaymentOrderPageRoutingModule
  ],
  declarations: [PaymentOrderPage]
})
export class PaymentOrderPageModule {}

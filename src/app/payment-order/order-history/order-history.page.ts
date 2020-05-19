import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PaymentOrderService } from '../payment-order.service';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.page.html',
  styleUrls: ['./order-history.page.scss'],
})
export class OrderHistoryPage implements OnInit {

  orders = []

  constructor(private router: Router, private paymentOrderService: PaymentOrderService) { }

  ngOnInit() {
    this.orders = this.paymentOrderService.getOrders();
  }


  ionViewWillEnter(){
    this.orders = this.paymentOrderService.getOrders();
  }

  goToMain(){
    this.router.navigate(['/payment-order']);
  }

  

}

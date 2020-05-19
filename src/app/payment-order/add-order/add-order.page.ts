import { Component, OnInit } from '@angular/core';
import { PaymentOrderService } from '../payment-order.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MenuController } from "@ionic/angular";

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.page.html',
  styleUrls: ['./add-order.page.scss'],
})
export class AddOrderPage implements OnInit {

  orders = []

  constructor(private paymentOrderService: PaymentOrderService, private router: Router, private formModulo: FormsModule, private menuController: MenuController) { }

  ngOnInit() {
  }

  saveNewOrder(nombre_titular,monto,imageURL,comments){
    this.paymentOrderService.addOrder(nombre_titular.value,parseInt(monto.value),imageURL.value,comments.value);
    this.router.navigate(['/payment-order']);
  }
}

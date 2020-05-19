import { Component, OnInit } from '@angular/core';
import { PaymentOrderService } from "./payment-order.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-payment-order',
  templateUrl: './payment-order.page.html',
  styleUrls: ['./payment-order.page.scss'],
})
export class PaymentOrderPage implements OnInit {

  orders = []
  saldo:number;


  constructor(private orderService: PaymentOrderService, private router: Router) {}

  ngOnInit() {
    //
  }

  ionViewWillEnter(){
    this.orders = this.orderService.getOrders();
    this.saldo = this.orders.reduce((
      acc, 
      cur
      ) => acc +(cur.monto), 0);
    console.log("Total: ", this.saldo)
  }

  addNewOrder(){
    this.router.navigate(['/add-order']);
  }

  handleInput(event){
    
    const query = event.target.value.toLowerCase();
    if(query && query.trim() !== ''){
      this.orders = this.orders.filter(m =>{
        return m.nombre_titular.toLowerCase().indexOf(query.trim().toLowerCase()) > -1;
      })
    }else{
      this.ionViewWillEnter();
    }
  }


  goToHistorial(){
    this.router.navigate(['/order-history'])
  }


}

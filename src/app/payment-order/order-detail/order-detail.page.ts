import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { PaymentOrderService } from '../payment-order.service';
import { Order } from '../payment-order.model';
import { AlertController } from "@ionic/angular";

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.page.html',
  styleUrls: ['./order-detail.page.scss'],
})
export class OrderDetailPage implements OnInit {

  order: Order;

  constructor(private activatedRoute: ActivatedRoute, private orderService: PaymentOrderService, private router: Router, private alertController: AlertController) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap =>{
      //if (!paramMap)
      const recipeId = paramMap.get('orderId')
      this.order = this.orderService.getOrder(recipeId);
    })
  }

  async deleteOrder(){
    const alert = await this.alertController.create({
      header: 'Eliminar',
      message: '¿Desea eliminar esta orden de pago?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
        },
        {
          text: 'Aceptar',
          handler: () => {
            this.orderService.deleteOrder(this.order.id);
            this.router.navigate(['/payment-order']);
          }
        }
      ]
    });
    await alert.present();
  }

}

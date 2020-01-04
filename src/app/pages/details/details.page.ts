import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Storage} from "@ionic/storage";
import {Product} from "../../models/interfaces-products";
import {itemCart} from "../../models/interface-itemCart";
import {ModalController, ToastController} from "@ionic/angular";
import {CartPage} from "../cart/cart.page";
import {ImagesViewServiceService} from "../../services/images-view-service.service";

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  productDetails:any;

  rate:String;
  constructor(public  httpClientService:ImagesViewServiceService,private route: ActivatedRoute, private router: Router,public storage:Storage,public toast:ToastController,public modal: ModalController) {

    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.productDetails = this.router.getCurrentNavigation().extras.state.data;
      }
    });
  }

  ngOnInit() {
  }

  slideOpts = {
    initialSlide:0,
    slidesPerView: 1,
    speed:1000,
    autoplay:true,
    loop: true,
    centeredSlides: true
  };

  addToCart(productDetails:Product) : void{

  let added:boolean;
  //si le panier est vide
    this.storage.get("cart").then((data:itemCart[])=> {
      if (data === null || data.length === 0) {
        data=[];
        data.push(
            {
              item: productDetails,
              qty: 1,
              amount: productDetails.price
            })
      }
      else {

        for (let i = 0; i < data.length; i++) {

          const element: itemCart = data[i];

          if (productDetails.id === element.item.id) {

            //Le panier n'est pas vide et contient l'article
            element.qty += 1;
            element.amount += productDetails.price;
            added = true
          }
        }

        if (!added) {
          //le panier n'est pas vide et ne contient pas l'article
          data.push(
              {

                item: productDetails,
                qty: 1,
                amount: productDetails.price
              })
        }

      }
      this.storage.set("cart",data).then(data => {

        this.presentToast();

      }).catch(err => {
        console.log("Erreur "+err)
      })

    })
  }


  async presentToast() {
    const toast = await this.toast.create({
      message: 'Votre panier à été mise à jour',
      duration: 1500,
      showCloseButton:true,
      closeButtonText:"Fermer"
    });
    toast.present();
  }

  async openCart() {
    const modal = await this.modal.create({
      component: CartPage,
    });
    return await modal.present();
  }


    onRateChange(event) {

        console.log('Your rate:', this.rate);
    }

    viewImage(src:String, event){

   return  this.httpClientService.viewImage(src,event);


    }

}

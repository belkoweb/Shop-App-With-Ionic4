import { Component, OnInit } from '@angular/core';
import {ModalController, ToastController} from "@ionic/angular";
import {itemCart} from "../../models/interface-itemCart";
import {Storage} from "@ionic/storage";
import { AlertController } from '@ionic/angular';
import {ImagesViewServiceService} from "../../services/images-view-service.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
cartItems:itemCart[];
total:number=0;
  constructor(public  httpClientService:ImagesViewServiceService,public alertController: AlertController,public  modal: ModalController, public storage:Storage,public toast:ToastController) { }

  ngOnInit() {
    console.log("ionViewDidLoad CartPage");
    this.storage.get("cart").then((data:itemCart[])=>{
      this.cartItems=data;
      this.cartItems.forEach((element)=>{
        if(element.item.availability.type==="Disponible en Magasin"){
          element.item.availability.feed = 0;
        }
     this.total +=(element.item.availability.feed*element.item.price*element.qty)
      })
    }).catch(err=>{
      console.log("Erreur ",err)
    });
  }
  async  removeItem(article:itemCart,index:number) {
    const alert = await this.alertController.create({
      header: 'Attention!',
      message: 'Etes-vous sur de vouloir retirer '+article.item.title+' ?',
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
        },
        {
          text: 'Retirer',
          handler: () => {
            let price:number=article.item.price;
            let qty:number=article.qty;
            let feed:number=article.item.availability.feed;
            let myTotal:number=feed+price+qty;
            this.cartItems.splice(index,1);
            this.storage.set("cart",this.cartItems).then((data)=>{
               this.total-= myTotal;
              this.presentToast();
            }).catch((err)=>{

              console.log("Error",err);
            })
          }
        }
      ]
    });
    await alert.present();
  }



   closeModal() {
     this.modal.dismiss();
  }

  async presentToast() {
    const toast = await this.toast.create({
      message: 'Article retiré',
      duration: 1000,
      showCloseButton:true,
      closeButtonText:"Fermer"
    });
    toast.present();
  }

  viewImage(src:String, event){

    return  this.httpClientService.viewImage(src,event);


  }
}

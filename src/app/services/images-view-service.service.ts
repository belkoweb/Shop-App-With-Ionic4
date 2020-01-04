import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ImagesViewComponent} from "../components/images-view/images-view.component";
import {ModalController} from "@ionic/angular";
@Injectable({
  providedIn: 'root'
})
export class ImagesViewServiceService {

  constructor(private  httpClient:HttpClient, private modalController:ModalController ) { }

  async viewImage(src:String, event) {
    event.stopPropagation();
    const modal = await this.modalController.create({
      component: ImagesViewComponent,
      componentProps: {
        imgSource: src,
      },
      cssClass: 'modal-fullscreen',
      keyboardClose: true,
      showBackdrop: true
    });

    return await modal.present();
  }
}

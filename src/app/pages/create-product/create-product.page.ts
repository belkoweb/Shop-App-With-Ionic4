import { Component, OnInit } from '@angular/core';
import {Availability, Product} from "../../models/interfaces-products";
import {ImagePicker, ImagePickerOptions, OutputType} from '@ionic-native/image-picker/ngx';
@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.page.html',
  styleUrls: ['./create-product.page.scss'],
})
export class CreateProductPage implements OnInit {
  myProduct:Product;
  categories=[];
  cities=[];
  constructor(private imagePicker: ImagePicker) {
    this.myProduct={} as Product;
    this.myProduct.availability ={} as Availability;
    this.myProduct.pictures=[];
    this.categories=[
      {
        title:"Vetements"
      } ,
      {
        title:"Chaussures"
      },
      {
        title:"Electroniques"
      },

      {
       title:"Mode & Acessoires"
      }
    ];
    this.cities=[
      {
        name:"Paris"
      },
      {
        name:"Londres"
      },
      {
        name:"Pekin"
      },
      {
        name:"Niger"
      }
    ]

  }

  ngOnInit() {
  }
  create(myProduct:Product){
   myProduct.id="5";
   myProduct.createAt=new Date();
   myProduct.averageStar=1;
   myProduct.availability.available=true;
    console.log("My Product ",myProduct);
  }

  pickImages(){
      let options:ImagePickerOptions={
          maximumImagesCount:4,
          outputType:OutputType.FILE_URL

      }
      this.imagePicker.getPictures(options).then((results) => {
          this.myProduct.pictures=results;
          for (var i = 0; i < results.length; i++) {
              console.log('Image URI: ' + results[i]);
          }
      }, (err) => {
          console.log("Erreur ", err);
      });
}

}

import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/interfaces-products';
import {NavigationExtras, Router} from "@angular/router";

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
})
export class AccueilPage implements OnInit {
  Articles:Product[];
  constructor( private router: Router) {

  this.Articles=[
    {
      title: 'Jacket',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      price: 45,
      category:'Vetements',
      createAt:new Date(),
      state:'Neuf',
      city:'Londres',
      id:'2',
      averageStar:4,
      availability :{
        available:true,
        type:"Livraison",
        feed:10
      },
      pictures : [
           'assets/imgs/produit2/presto1.jpg',
           'assets/imgs/produit2/presto2.jpg',
           'assets/imgs/produit2/presto3.jpg',
           'assets/imgs/produit2/presto4.jpg'
      ]
    },

    {
      title: 'Maquillage',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      price: 25,
      category:'Mode & Accessoires',
      createAt:new Date(),
      state:'Neuf',
      city:'Madrid',
      id:'4',
      averageStar:3,
      availability :{
        available:true,
        type:"Disponible en Magasin",
        
      },
      pictures : [
        'assets/imgs/produit4/makeup1.jpg',
        'assets/imgs/produit4/makeup2.jpg',
        'assets/imgs/produit4/makeup3.jpg',
        'assets/imgs/produit4/makeup4.jpg'
      ]
    },


    {
      title: 'Téléphone Iphone',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      price: 145,
      category:'Electoniques',
      createAt:new Date(),
      state:'Neuf',
      city:'Niger',
      id:'1',
      averageStar:5,
      availability :{
        available:true,
        type:"Disponible en Magasin",
   
      },
      pictures : [
           'assets/imgs/produit1/phone1.jpg',
           '/assets/imgs/produit1/phone2.jpg',
           '/assets/imgs/produit1/phone3.JPG',
           '/assets/imgs/produit1/phone4.jpg'
      ]
    },


    {
      title: 'PS4',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      price: 85,
      category:'Electroniques',
      createAt:new Date(),
      state:'Déjà utilisé',
      city:'Maroc',
      id:'5',
      averageStar:4,
      availability :{
        available:true,
        type:"Livraison",
        feed:14
      },
      pictures : [
           'assets/imgs/produit5/ps1.jpg',
           'assets/imgs/produit5/ps2.jpg',
           'assets/imgs/produit5/ps3.jpg',
           'assets/imgs/produit5/ps4.jpg'
      ]
    },


    {
      title: 'Ketch Nike',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      price: 70,
      category:'Chaussure',
      createAt:new Date(),
      state:'Neuf',
      city:'Londres',
      id:'3',
      averageStar:2,
      availability :{
        available:true,
        type:"Livraison",
        feed:7
      },
      pictures : [
           'assets/imgs/produit3/presto5.jpg',
           'assets/imgs/produit3/presto6.jpg',
           'assets/imgs/produit3/presto7.jpg',
           'assets/imgs/produit3/presto8.jpg'
      ]
    }



  ]
   }


  ngOnInit() {
  }

  showDetails(article){

    let navigationExtras: NavigationExtras = {
      state: {
        data: article
      }
    };
    this.router.navigate(['details'], navigationExtras);
  }
 showCreatePage(){
   this.router.navigate(['create-product']);
 }
 

}

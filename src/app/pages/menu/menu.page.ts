import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Category} from "../../models/interface-category";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  public categories: Category[];



  constructor( private router:Router) {

    this.categories = [
      {
       title: "Vetements",
       description: "Description",
       icon:"shirt"
      },
      {
        title: "Electroniques",
        description: "Description",
        icon:"phone-portrait"
      },
      {
        title: "Mode et Accessoires",
        description: "Description",
        icon:"bowtie"
      },
      {
        title: "Chaussures",
        description: "Description",
        icon:"archive"
      }

    ]
  }

  ngOnInit() {
  }

  onMenuAction(m) {

  console.log(m.title);

  }
}

import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { FirebaseDataService } from 'src/app/services/database/firebase-data.service';
import { ProductService } from 'src/app/services/products/product.service';

@Component({
  selector: 'app-list-category-products',
  templateUrl: './list-category-products.component.html',
  styleUrls: ['./list-category-products.component.scss']
})
export class ListCategoryProductsComponent {
  mapCategory: Map<String, string[]>;
  categorys:String[]
  constructor(private firebaseDataService: FirebaseDataService, private productServices:ProductService) {
  }
  ngOnInit() { 
   this.setUp();
  }
  async setUp() {
    this.productServices.getProductsIdByCategory().then((mapa) => {
      this.mapCategory = mapa;
    })

    
  }

  

}



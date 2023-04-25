import { Component } from '@angular/core';
import { Product } from 'src/app/models/product';
import { Observable, from } from 'rxjs';
import { FirebaseDataService } from 'src/app/services/database/firebase-data.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  title = 'Client';
  imageUrl!: Observable<string>;
  product:Product = new Product('0', "gs://pwm-galactic-bites-48faf.appspot.com/images/imagen_2023-04-17_120153648.png", "Hamburguesa","Hambursa rica", 6.30, 0);
  constructor(public firebaseDataService: FirebaseDataService) {
    
    this.firebaseDataService.getProduct().then((product) => {
      this.product = product;
      this.imageUrl = from(firebaseDataService.getImage(product.image));
    });
    
    
  }
  
}

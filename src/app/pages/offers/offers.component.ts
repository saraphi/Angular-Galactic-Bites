import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit {

  discountedBanner: string[] = [
    'https://static.kfc.es/images/content/home/carousel/lg/chollazo.jpg?v=30k25g', 
    'https://images.getduna.com/ucrmq9mk2ej1277f0v2gbe8pjir4.jpg', 
    'https://static.kfc.es/images/content/home/carousel/lg/losmalditos.jpg?v=30k25g',
    'https://brand-uk.assets.kfc.co.uk/2023-04/W4_23_WEBSITE_CAROUSEL_DESKTOP_HW_2000X650.jpg?VersionId=zRmEv456lu__2T2vW5GaywBXGZEIlKK8'
  ];

  discounted: string[] = [];
  points: string[] = []; 

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.discounted = this.productService.getProductsOnDiscount();
  }
}
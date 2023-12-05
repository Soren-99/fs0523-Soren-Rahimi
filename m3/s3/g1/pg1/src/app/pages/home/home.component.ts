import { Component } from '@angular/core';
import { ProductsService } from '../../products.service';
import { iProduct } from '../../Models/i-product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  products:iProduct[] = [];

  constructor(private productSvc:ProductsService){}

  ngOnInit(){
    this.productSvc.getAll().subscribe(prod => this.products = prod)
  }

  addToFavorite(product:iProduct){
    this.productSvc.addFavorite(product)
  }
  addToCart(product:iProduct){
    this.productSvc.addToCart(product)
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { iProduct } from './Models/i-product';
import { Subject, map } from 'rxjs';

type responseData = {
  products : iProduct[]
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  favoriteSubject:Subject<iProduct> = new Subject()
  favorite$ = this.favoriteSubject.asObservable()

  cartSubject:Subject<iProduct> = new Subject()
  cart$ = this.cartSubject.asObservable()


  constructor(private http:HttpClient) { }

  apiUrl:string = 'https://dummyjson.com/products';

  getAll(){
    return this.http.get<responseData>(this.apiUrl)
    .pipe(map(r => r.products))
  }

 addFavorite(product:iProduct){
  this.favoriteSubject.next(product)
 }
 addToCart(product:iProduct){
  this.cartSubject.next(product)
}

}

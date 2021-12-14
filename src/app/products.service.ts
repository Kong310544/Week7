import { Injectable } from '@angular/core';
import { Product } from './components/product/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getProducts(): Product[]{
    return [
    new Product(1,"Fried Chicken",100,20,"https://images.pexels.com/photos/60616/fried-chicken-chicken-fried-crunchy-60616.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"),
    new Product(2,"Nugget",120,10,"https://media.istockphoto.com/photos/basket-of-chicken-nuggets-with-sweet-and-sour-sauce-picture-id618209540"),
    new Product(3,"Mashed Potato",300,0,"https://food.mthai.com/app/uploads/2017/05/%E0%B9%80%E0%B8%AA%E0%B8%B7%E0%B9%89%E0%B8%AD%E0%B8%9C%E0%B9%89%E0%B8%B2%E0%B9%80%E0%B8%94%E0%B9%87%E0%B8%81-baby-shop.jpg"),
    new Product(4,"Egg Tart",200,20,"https://i.ytimg.com/vi/4wjURxNfKtk/maxresdefault.jpg"),
    new Product(5,"Chicken",150,0,"https://img-global.cpcdn.com/recipes/cd9a13748fb5aa44/1200x630cq70/photo.jpg")
  ];
  }
}

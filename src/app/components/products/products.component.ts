import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  public productLIst: any;
  public filterCategory: any;
  searchKey: string = '';

  constructor(private api: ApiService, private cartService: CartService) {}

  ngOnInit(): void {
    this.api.getProduct().subscribe((res) => {
      this.productLIst = res;
      this.filterCategory = res;
      // console.log(res);

      this.productLIst.forEach((a: any) => {
        if (
          a.category === "women's clothing" ||
          a.category === "men's clothing"
        ) {
          a.category = 'fashion';
        }
        Object.assign(a, { quantity: 1, total: a.price });
      });
    });

    this.cartService.search.subscribe((val: any) => {
      this.searchKey = val;
    });
  }

  addToCart(item: any) {
    this.cartService.addToCart(item);
  }

  filter(category: string) {
    this.filterCategory = this.productLIst.filter((a: any) => {
      if (a.category == category || category == '') {
        return a;
      }
    });
  }
}

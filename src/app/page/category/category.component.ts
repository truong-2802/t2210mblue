import {Component} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";
import {Adapters} from "../../ennums/adapter";
import {ProductServices} from "../../services/product.services";

@Component({
  selector: `app-category`,
  templateUrl:`./category.component.html`
})
export class CategoryComponent{
  limit:number=Adapters.LIMIT;
  products:any=[];
  constructor(private  productService:ProductServices) {
  }
  ngOnInit(){
    this.getProducts();
  }
   getProducts(){
    this.productService.getProduct(this.limit).subscribe(data=>{
      this.products=data.products;
    })

   }
   loadMore(){
    this.limit+=10;
    this.getProducts()
   }
}

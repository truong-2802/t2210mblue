import {Component} from "@angular/core";
import {ProductServices} from "../services/product.services";

@Component({
  selector: `app-search`,
  templateUrl:`./search.component.html`
})
export class SearchComponent{

  s:string='';
  products: any=[];
  constructor(private productServices:ProductServices) {
  }
  search (){
    this.productServices.searchProducts(this.s)
      .subscribe(data=>{
        this.products =  data.products;
      })
  }

}

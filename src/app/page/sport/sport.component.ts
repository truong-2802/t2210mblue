import {Component} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";
import {Adapters} from "../../ennums/adapter";
import {ProductServices} from "../../services/product.services";

@Component({
  selector: `app-sport`,
  templateUrl:`./sport.component.html`
})
export class SportComponent{
  tim:number=Adapters.LIMIT;
  products:any=[];
  constructor(private productServices:ProductServices) {
  }
  ngOnInit(){
    this.getProducts();
  }
  getProducts(){
    this.productServices.getProductDetail(this.tim).subscribe(data=>{
      this.products=data.products;
    })
  }

}

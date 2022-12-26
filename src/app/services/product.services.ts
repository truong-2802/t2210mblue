import {HttpClient} from "@angular/common/http";
import {Adapters} from "../ennums/adapter";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn:'root'
})
export class ProductServices{
  constructor(private  http:HttpClient) {
  }
  getProduct(limit:number){
    const url = Adapters.BASE_URL+'products?limit='+limit;
    return this.http.get<any>(url);
  }
  getProductDetail(id:number){
    const url=Adapters.BASE_URL+'products/'+id;
    return this.http.get<any>(url);
  }
  searchProducts(name: string){
    const url = Adapters.BASE_URL+ 'products/search?q='+name;
    return this.http.get<any>(url);
  }
  getCategory(){
    const url=Adapters.BASE_URL+'/products/category';
    return this.http.get<any>(url);
  }
  getCategoryDetail( name:string){
    const url=Adapters.BASE_URL+'/products/category'+name;
    return this.http.get<any>(url);
  }
}


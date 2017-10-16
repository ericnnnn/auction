import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private products:Array<Product>;

  constructor() { }

  ngOnInit() {
    this.products=[
      new Product(1,"The first product",1.99,3.5,"the first product from auction.",["electronics","hardware"]),
      new Product(2,"The second product",2.99,2.5,"the second product from auction.",["electronics","hardware"]),
      new Product(3,"The third product",3.99,4.5,"the third product from auction.",["electronics","hardware"]),
      new Product(4,"The forth product",4.99,3.5,"the forth product from auction.",["electronics","hardware"]),
      new Product(5,"The fifth product",5.99,1.5,"the fifth product from auction.",["electronics","hardware"]),
      new Product(6,"The sixth product",6.99,2.5,"the sixth product from auction.",["electronics","hardware"])
    ]

    this.products.push(new Product(7,"The seventh product",6.99,3.5,"the seventh product from auction.",["electronics","hardware"]))
  }

}
export  class  Product{
  constructor(
      public id:number,
      public title:string,
      public price:number,
      public rating:number,
      public desc:string,
      public categories:Array<string>
  ){
  }
}

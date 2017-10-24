import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

  private products:Product[]=[
    new Product(1,"The first product",1.99,3.5,"the first product from auction.",["electronics","hardware"]),
    new Product(2,"The second product",2.99,2.5,"the second product from auction.",["electronics","hardware"]),
    new Product(3,"The third product",3.99,4.5,"the third product from auction.",["electronics","hardware"]),
    new Product(4,"The forth product",4.99,3.5,"the forth product from auction.",["electronics","hardware"]),
    new Product(5,"The fifth product",5.99,1.5,"the fifth product from auction.",["electronics","hardware"]),
    new Product(6,"The sixth product",6.99,2.5,"the sixth product from auction.",["electronics","hardware"])
  ]

  private comments:Comment[]=[
    new Comment(1,1,"2017-02-02 22:22:22","Mr C",3,"nice work"),
    new Comment(2,1,"2017-03-03 22:22:22","Mr d",1,"nice work"),
    new Comment(3,1,"2017-04-04 22:22:22","Mr e",5,"nice work"),
    new Comment(4,2,"2017-05-05 22:22:22","Mr f",2,"nice work")

  ]

  constructor() { }

  getAllCategories():string[]{
    return ["electronics","hardware","software"];
  }

  getProdcuts():Product[]{
    return this.products;
  }
  getProduct(id:number):Product{
    return this.products.find((product)=>product.id==id);
  }
  getCommentsForProductId(id:number):Comment[]{
    return this.comments.filter((comment:Comment)=>comment.productId==id);
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

export class Comment{
  constructor(public id: number,
              public productId: number,
              public timestamp: string,
              public user: string,
              public rating: number,
              public content: string
             ){}
}
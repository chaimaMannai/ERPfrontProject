import { OrderSaleEntity } from "./order-sale-entity";
import { ProductEntity } from "./product-entity.model";

export class LineSaleEntity {
    id?:number;
    qt:number;
    descriptio?:string;
    orderSale? :OrderSaleEntity;
    product? :ProductEntity;
}

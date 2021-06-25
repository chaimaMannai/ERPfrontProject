import { PurchaseOrder } from "app/model/purchase-order";
import { ProductEntity } from "./product-entity.model";

export class LineBuyEntity {
    id?:number;
    qt:number;
    descriptio?:string;
    purchaseOrder? :PurchaseOrder;
    product? :ProductEntity;
}

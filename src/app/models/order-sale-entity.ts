import { CustomerEntity } from "./customer-entity";
import { InvoiceEntity } from "./invoice-entity";

export class OrderSaleEntity {
    number? : number;
    date?: Date;
    totalPrice? :number;
    customer ?: CustomerEntity;
    invoice : InvoiceEntity;
    valid? :boolean;

    
}

import { InvoiceEntity } from "app/models/invoice-entity";
import { ProviderModel } from "./provider-model";

export class PurchaseOrder {
    number? : number;
    date? : Date;
    totalPrice? :number;
    provider? : ProviderModel;
    invoice : InvoiceEntity;
}

import { InvoiceEntity } from "./invoice-entity";

export class PaymentEntity {
   
   id?:number;
   mode :string;
   datePayment? :Date;
   montant :number ;
   invoice? :InvoiceEntity;

}

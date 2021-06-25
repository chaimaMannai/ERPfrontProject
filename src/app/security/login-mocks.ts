import {AppUserAuth} from "./app-user-auth";
export const LOGIN_MOCKS : AppUserAuth[] = [
    {
        userName : "admin",
        bearerToken :"kjb255666op6548ab",
        isAuthenticated : true,
        canAccessInvoice : true,
        canAccessStock : true , 
        canAccessProduct : true,
        canAccessCustomer : true ,
        canAccessProvider : true , 
        canAccessSaleOrder : true,
        canAccessPurshaseOrder : true 
        // canAccessPaiment : true 

    },
    {
        userName : "StockMgr",
        bearerToken :"abi393kdkd9393ikd",
        isAuthenticated : true,
        canAccessInvoice : true,
        canAccessStock : true , 
        canAccessProduct : false,
        canAccessCustomer : false ,
        canAccessProvider : true , 
        canAccessSaleOrder : false,
        canAccessPurshaseOrder : true 
        // canAccessPaiment : false 

    },
    {
        userName : "SaleMgr",
        bearerToken :"kjb255ebd6548abcd",
        isAuthenticated : true,
        canAccessInvoice : false,
        canAccessStock : false , 
        canAccessProduct : true,
        canAccessCustomer : true ,
        canAccessProvider : false , 
        canAccessSaleOrder : true,
        canAccessPurshaseOrder : false 
        // canAccessPaiment : true 

    }
];
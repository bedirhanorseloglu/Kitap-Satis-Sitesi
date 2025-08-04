/*
BookStoreContext, birden fazla component'in aynı veriyi veya fonksiyonları paylaşması gerektiğinde bu işlemi daha basit ve organize bir şekilde yapmamıza olanak tanır. 
Bu da kodumuzu daha temiz ve yönetilebilir hale getirir
*/ 


import { createContext } from "react";

const BookStoreContext = createContext();

export default BookStoreContext;
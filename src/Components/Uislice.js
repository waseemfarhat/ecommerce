import { createSlice } from "@reduxjs/toolkit";


const CartSlice = createSlice({
    name: 'mycart',
    initialState: {
      Cartitems: [],
      totalQuanity: 0,
    },
    reducers: {
      AddtocartHandler(state, action) {
        const newItem = action.payload;
        state.totalQuanity++;
        const existingItem = state.Cartitems.find((item) => {
          return newItem.id === item.id;
        });
  
        if (!existingItem) {
          state.Cartitems.push({
            id: newItem.id,
            image: newItem.image,
            quantity: 1,
            name: newItem.name,
            price: newItem.price,
            totalprice: newItem.price,
          });
         
        }
        else if(state.Cartitems.length===0){
          state.totalQuanity=0;
        }
        else {
          existingItem.quantity++;
          existingItem.totalprice = existingItem.price * existingItem.quantity;
        }
      },
      RemoveFromCartHandler(state, action) {
        const itemIdToDelete = action.payload;
        state.Cartitems = state.Cartitems.filter((item) => {
          return itemIdToDelete !== item.id;
        });
        if(state.Cartitems.length===0){
          state.totalQuanity=0;
        }

      },

      Addquantityfunction(state,action)
      {
       const Productquantoaddid=action.payload
     const  wicked= state.Cartitems.find((eachitem)=>{
          return eachitem.id===Productquantoaddid
        })

        if(wicked){
          wicked.quantity++;
          wicked.totalprice=wicked.quantity*wicked.price
        }

      },
      Removequantityfunction(state,action){
        const removeid=action.payload;

       
        const Booyakasha=state.Cartitems.find((singleitem)=>{
          return singleitem.id===removeid
        })

        if(Booyakasha){
          Booyakasha.quantity--;
          Booyakasha.totalprice=Booyakasha.quantity*Booyakasha.price

          if(Booyakasha.quantity<=0){
           
            const toadd=state.Cartitems.filter((singleitem)=>singleitem.id!==removeid)
               state.Cartitems=toadd
     
             }

        }

        
    
      },
    

    },
  });










  
  export default CartSlice;
  export const cartSliceActions = CartSlice.actions;
  
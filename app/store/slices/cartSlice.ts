import { ProductCartType } from "@/components/context-provider/ContextProvider"
import { PayloadAction, createSlice } from "@reduxjs/toolkit"

interface IState {
   cart: ProductCartType[]
}

const initialState: IState = {
   cart: []
}

const CartSlice = createSlice({
   name: 'createSlice',
   initialState,
   reducers: {
      addToCart: (state, action: PayloadAction<ProductCartType | null>) => {
         const payload = action.payload

         if (payload !== null) {
            const existingItem = state.cart.find(
               (cartItem) => cartItem.id === payload.id && cartItem.size === payload.size
            )

            if (!existingItem) {
               state.cart.push(payload)
            }
         }
      },
      removeFromCart: (state, action: PayloadAction<number>) => {
         state.cart = state.cart.filter(e => e.id !== action.payload)
      }
   }
})

export const { addToCart, removeFromCart } = CartSlice.actions
export default CartSlice.reducer
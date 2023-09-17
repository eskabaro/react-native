import { FC, useContext, useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "@/store/hooks"
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { TouchableOpacity } from "react-native"
import { Context } from "../context-provider/ContextProvider"
import { addToCart, removeFromCart } from "@/store/slices/cartSlice"
import Icon from 'react-native-vector-icons/Ionicons'

export const AddToCart: FC = () => {
   const { product } = useContext(Context)
   const { cart } = useAppSelector(state => state.CartReducer)
   const [inCart, setInCart] = useState<boolean>(false)
   const dispatch = useAppDispatch()

   useEffect(() => {
      if (product !== null) {
         const item = cart.find(e => e.id === product.id)
         setInCart(item ? true : false)
      }
   }, [cart, product])


   if (!inCart) {
      return (
         <TouchableOpacity
            onPress={() => dispatch(addToCart(product))}>
            <Icon
               name='add-circle-sharp'
               size={wp(6.5)}
               color={'#000'}
            />
         </TouchableOpacity>
      )
   } else {
      return (
         <TouchableOpacity
            onPress={() => product?.id && dispatch(removeFromCart(product.id))}>
            <Icon
               name='cart'
               size={wp(6.5)}
               color={'#000'}
            />
         </TouchableOpacity>
      )
   }
}
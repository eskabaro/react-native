import { FC, useContext } from "react"
import { Text, View } from "react-native"
import { Layout } from "@/components/layout/Layout"
import { useAppSelector } from "@/store/hooks"
import { CartItem } from "./CartItem"
import { Context } from "@/components/context-provider/ContextProvider"
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'

export const Cart: FC = () => {
   const { cart } = useAppSelector(state => state.CartReducer)
   const { totalPrice } = useContext(Context)

   return (
      <Layout>
         <View className='pt-3'>
            {cart.length > 0 && (
               <Text className='text-light-black mb-3 text-base font-semibold'>
                  Загальна сума: <Text className='font-normal'>{(Math.ceil(totalPrice * 10) / 10).toFixed(1)} грн.</Text>
               </Text>
            )}
            {cart.length > 0 ? (
               cart.map((e, i) => <CartItem key={e.id} idx={i} {...e} />)
            ) : (
               <View
                  style={{ height: hp('85%') }}
                  className='flex justify-center items-center'
               >
                  <Text className='text-light-black'>Ваша корзина поки що пуста.</Text>
               </View>
            )}
         </View>
      </Layout>
   )
}
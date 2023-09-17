import { FC, useContext, useEffect, useState } from "react"
import { Image, Pressable, Text, View } from "react-native"
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { Context, ProductCartType } from "@/components/context-provider/ContextProvider"
import { useAppDispatch, useAppSelector } from "@/store/hooks"
import { removeFromCart } from "@/store/slices/cartSlice"
import Animated, { SlideInRight } from "react-native-reanimated"
import Icon from 'react-native-vector-icons/Ionicons'

interface IProps extends ProductCartType { idx: number }

export const CartItem: FC<IProps> = ({ id, idx, image, title, price, size, quantity }) => {
   const [localQuantity, setLocalQuantity] = useState<number>(quantity)
   const [localPrice, setLocalPrice] = useState<number>(price)
   const { cart } = useAppSelector(state => state.CartReducer)
   const { setTotalPrice } = useContext(Context)
   const dispatch = useAppDispatch()

   const styleBtn = 'w-7 h-7 bg-white rounded-full flex items-center justify-center'

   const increment = () => {
      setLocalQuantity((value) => {
         if (value < 9) {
            setLocalPrice(Number(((value + 1) * price).toFixed(2)))
            return value + 1
         }
         return 9
      })
   }

   const decrement = () => {
      setLocalQuantity((value) => {
         if (value <= 1) return 1
         setLocalPrice(Number(((value - 1) * price).toFixed(2)))
         return value - 1
      })
   }

   useEffect(() => {
      const totalPrice = cart.reduce((total, item) => total + (item.price * localQuantity), 0)
      setTotalPrice(totalPrice)
   }, [localQuantity, cart])

   return (
      <Animated.View
         entering={SlideInRight.delay(120 * (idx + 1))}
         className='p-2 rounded-2xl bg-light-green flex flex-row mb-3'>
         <View>
            <Image
               className='rounded-xl'
               source={{ uri: image }}
               width={hp(10)}
               height={hp(10)}
            />
            <View style={{ width: hp(10) }} className='flex flex-row mt-2 items-center justify-between'>
               <Pressable
                  className={styleBtn}
                  onPress={decrement}
               >
                  <Text className='font-semibold text-light-black'>-</Text>
               </Pressable>
               <Text
                  className='text-xl font-semibold text-light-black'>{localQuantity}</Text>
               <Pressable
                  onPress={increment}
                  className={styleBtn}
               >
                  <Text className='font-semibold text-light-black'>+</Text>
               </Pressable>
            </View>
         </View>

         <View className='flex-1 mr-2 ml-2'>
            <Text className='text-base font-bold mb-3 text-light-black'>{title}</Text>
            <Text className='text-light-black'>Ціна: {localPrice} грн.</Text>
         </View>

         <View style={{ maxWidth: hp(8) }} className='flex-1 justify-between items-end'>
            <Pressable
               className='w-7 h-7 bg-white rounded-full flex items-center justify-center'
               onPress={() => dispatch(removeFromCart(id))}
            >
               <Icon
                  name='close-outline'
                  size={wp(6.5)}
                  color={'#000'}
               />
            </Pressable>
            <View
               className='border-2 border-green rounded-full flex justify-center items-center'
               style={{ width: hp(8), height: hp(8) }}
            >
               <Text className='font-extrabold text-3xl text-light-black'>{size}</Text>
            </View>
         </View>
      </Animated.View>
   )
}
import { FC, useContext, useEffect, useRef, useState } from "react"
import { LayoutChangeEvent, Text, View } from "react-native"
import { Layout } from "@/components/layout/Layout"
import Animated, { useAnimatedStyle, useSharedValue, withTiming, Easing } from "react-native-reanimated"
import { Context } from "@/components/context-provider/ContextProvider"
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { OptionsSize } from "./OptionsSize"
import { OptionsIncluded } from "./OptionsIncluded"
import type { Props } from "@/components/navigation/types"


export const Details: FC<Props> = ({ route }) => {
   const { params } = route
   const { setProduct } = useContext(Context)
   const [price, setPrice] = useState<number>(Number(params.item.price))
   const [size, setSize] = useState<string>('s')
   const widthAnimate = useSharedValue(0)

   const blockRef = useRef<View | null>(null)
   const [width, setWidth] = useState<number>(0)

   const onLayout = (event: LayoutChangeEvent) => {
      const { width } = event.nativeEvent.layout
      setWidth(width)
   }

   const animatedStyles = useAnimatedStyle(() => ({
      width: widthAnimate.value
   }))

   widthAnimate.value = withTiming(width, {
      duration: 700,
      easing: Easing.out(Easing.quad)
   })

   useEffect(
      () => {
         const updatedItem = {
            ...params.item,
            price: price,
            size: size,
            quantity: 1
         }
         setProduct(updatedItem)
      },
      [price]
   )

   return (
      <Layout>
         <Animated.Image
            source={{ uri: params.item.image }}
            style={{ width: '100%', height: hp(50) }}
            className='rounded-b-3xl'
            sharedTransitionTag={params.item.id.toString()}
         />
         <View ref={blockRef} onLayout={onLayout}>
            <Text style={{ paddingLeft: hp(2), paddingRight: hp(2) }} className='text-2xl font-bold text-light-black mt-4'>{params.item.title}</Text>
            <Text style={{ paddingLeft: hp(2), paddingRight: hp(2) }} className='text-xl font-bold text-light-black mb-4'>{price} грн.</Text>
            <Animated.View style={[animatedStyles]} className='bg-light-green h-1' />
         </View>

         <OptionsSize
            setSize={setSize}
            setPrice={setPrice}
            currentPrice={Number(params.item.price)}
         />

         <OptionsIncluded />

         <View className='bg-primary p-5 rounded-t-xl text-white'>
            <Text className="text-white">{params.item.description}</Text>
         </View>
      </Layout>
   )
}
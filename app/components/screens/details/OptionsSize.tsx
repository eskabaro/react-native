import { ISizesType, sizes } from "@/store/data";
import { Dispatch, FC, SetStateAction } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Animated, { SharedValue, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'

interface IProps {
   setPrice: Dispatch<SetStateAction<number>>
   setSize: Dispatch<SetStateAction<string>>
   currentPrice: number,
}

export const OptionsSize: FC<IProps> = ({ setPrice, setSize, currentPrice }) => {
   const offset = useSharedValue(0)

   const stylesSize = useAnimatedStyle(() => ({
      transform: [{ translateX: offset.value }]
   }))

   return (
      <>
         <Text
            style={{ paddingLeft: hp(2), paddingRight: hp(2) }}
            className='text-2xl text-light-black font-bold mt-4'
         >Параметри розміру</Text>
         <View className='flex items-center mt-4'>
            <View style={{ maxWidth: hp(40) }}>
               <View className='m-auto flex flex-row'>
                  {sizes.map((e, idx) => (
                     <SizeItem
                        currentPrice={currentPrice}
                        setPrice={setPrice}
                        setSize={setSize}
                        offset={offset}
                        item={e}
                        key={e.id}
                        idx={idx}
                     />
                  ))}
               </View>
               <Animated.View
                  style={[stylesSize, { width: hp(10), height: hp(10), marginTop: -hp(10) }]}
                  className='bg-light-green rounded-full -z-10 border-loader border-green'
               />
            </View>
         </View>
      </>
   )
}



interface ISizeItemProps {
   setPrice: Dispatch<SetStateAction<number>>
   setSize: Dispatch<SetStateAction<string>>
   offset: SharedValue<number>
   currentPrice: number
   item: ISizesType
   idx: number
}

const SizeItem: FC<ISizeItemProps> = ({ offset, item, idx, setPrice, setSize, currentPrice }) => {
   const transform = useSharedValue(100)

   const stylesTransform = useAnimatedStyle(() => ({
      transform: [{ translateY: transform.value }]
   }))

   transform.value = withTiming(0, {
      duration: (idx + 1) * 300
   })

   const sizeData: Record<string, { priceIncrease: number, offset: number }> = {
      s: { priceIncrease: 0, offset: 0 },
      m: { priceIncrease: 0.5, offset: hp(10) },
      l: { priceIncrease: 1, offset: hp(20) },
      xl: { priceIncrease: 1.5, offset: hp(30) },
   }

   const handlePress = (size: string) => {
      const newSizeData = sizeData[size] || sizeData.s
      setSize(size)
      setPrice(currentPrice + newSizeData.priceIncrease)
      offset.value = withTiming(newSizeData.offset)
   }

   return (
      <Animated.View style={[stylesTransform]}>
         <TouchableOpacity
            key={item.id}
            onPress={() => handlePress(item.size)}
            className='flex justify-center items-center rounded-full'
            style={{ width: hp(10), height: hp(10), zIndex: -2 }}
         >
            <Text className='font-extrabold text-3xl text-light-black'>{item.size}</Text>
            <Text className='text-light-black'>{item.title}</Text>
         </TouchableOpacity>
      </Animated.View>
   )
}
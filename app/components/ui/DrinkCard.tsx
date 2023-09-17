import { FC, useEffect } from "react"
import { Text, TouchableOpacity, View } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { RootStackParamList } from "../navigation/types"
import { EScreens } from "../navigation/screens"

interface IProps {
   idx: number,
   item: any
}

export const DrinkCard: FC<IProps> = ({ idx, item }) => {
   const { navigate } = useNavigation<NativeStackNavigationProp<RootStackParamList, EScreens.Home>>()

   const transformAnimate = useSharedValue(70)
   const opacityAnimate = useSharedValue(0)

   const isEvent = idx % 2 == 0

   const animatedStyles = useAnimatedStyle(() => ({
      transform: [{ translateY: transformAnimate.value }],
      opacity: opacityAnimate.value
   }))

   useEffect(() => {
      transformAnimate.value = 70
      opacityAnimate.value = 0

      transformAnimate.value = withTiming(0, { duration: ((idx + 1) * 200) >= 1500 ? 1500 : ((idx + 1) * 200) })
      opacityAnimate.value = withTiming(1, { duration: 500 })
   }, [])


   return (
      <Animated.View style={[animatedStyles]}>
         <TouchableOpacity
            onPress={() => navigate(EScreens.Details, { item })}
            className='mb-3'
            style={{
               height: hp('30%'),
               marginLeft: isEvent ? 0 : wp(2),
               marginRight: isEvent ? wp(2) : 0,
            }}
         >
            <Animated.Image
               source={{ uri: item.image }}
               style={{ height: hp('22%') }}
               className='w-full object-contain rounded-2xl'
               sharedTransitionTag={item.id.toString()}
            />
            <View className='flex-1 justify-evenly'>
               <Text className="text-black">{item.title}</Text>
               <Text className="text-black">Ціна: {item.price} грн.</Text>
            </View>
         </TouchableOpacity>
      </Animated.View>
   )
}
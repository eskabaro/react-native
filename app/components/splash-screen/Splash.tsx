import { FC, useEffect } from "react"
import { Image, Text, View } from "react-native"
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'

export const Splash: FC = () => {
   const offset = useSharedValue(0)

   const styleOffcet = useAnimatedStyle(() => ({
      padding: 0
   }))

   useEffect(() => {
      offset.value = withTiming(100, {
         duration: 500
      })
   }, [])

   return (
      <View className='flex-1 bg-white justify-center items-center'>
         <Animated.View
            style={[styleOffcet]}
            className='bg-primary p-12 rounded-full'>
            <View className='bg-green p-5 rounded-full'>
               <Image
                  style={{
                     width: hp(15),
                     height: hp(15)
                  }}
                  source={require('../../../assets/logo/logo.png')}
               />
            </View>
         </Animated.View>
         <Text className='text-primary font-extrabold text-4xl mt-5'>Foody</Text>
         <Text className='text-primary font-bold text-sm'>Foody is always right</Text>
      </View>
   )
}
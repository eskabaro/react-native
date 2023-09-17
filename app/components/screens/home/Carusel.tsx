import { Dispatch, FC, SetStateAction, useEffect, useRef, useState } from "react";
import { View, FlatList, TouchableOpacity, Text, Image, Animated } from "react-native";
import { CategoriesType, categories } from "@/store/data";
import { SetCategoriesType } from "./Home";
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

interface IProps {
   setCategory: Dispatch<SetStateAction<SetCategoriesType>>
}

export const Carusel: FC<IProps> = ({ setCategory }) => {
   const [activeItem, setActiveItem] = useState<number | null>(null)
   const fadeTranslate = useRef(new Animated.Value(15)).current
   const fadeOpacity = useRef(new Animated.Value(0)).current

   const handleActivItem = (id: number, categoryName: CategoriesType | '') => {
      if (id === activeItem) {
         setActiveItem(null)
         setCategory('')
      } else {
         setActiveItem(id)
         setCategory(categoryName)
      }
   }

   useEffect(() => {
      const fadeInAnimation = Animated.timing(fadeOpacity, {
         toValue: 1,
         duration: 700,
         useNativeDriver: true,
      })

      const fadeOutAnimation = Animated.timing(fadeTranslate, {
         toValue: 0,
         duration: 700,
         useNativeDriver: true,
      })

      Animated.parallel([fadeInAnimation, fadeOutAnimation]).start()
   }, [fadeTranslate, fadeOpacity])


   return (
      <Animated.FlatList
         horizontal
         className='mt-5'
         style={{ transform: [{ translateY: fadeTranslate }], opacity: fadeOpacity, maxHeight: hp(12) }}
         data={categories}
         keyExtractor={(item) => item.id.toString()}
         showsHorizontalScrollIndicator={false}
         renderItem={({ item, index }) => {
            return (
               <TouchableOpacity
                  onPress={() => handleActivItem(item.id, item.title)}
                  style={{
                     width: hp(9),
                     height: hp(12),
                     marginRight: index === categories.length - 1 ? 0 : 15,
                  }}
               >
                  <View
                     className='rounded-full overflow-hidden border-solid'
                     style={{
                        width: hp(9),
                        height: hp(9),
                        borderColor: `${activeItem === item.id ? '#1E3932' : '#DADADA'}`,
                        borderWidth: hp(.5),
                     }}
                  >
                     <Image
                        className='w-full h-full'
                        source={{ uri: item.image }}
                     />
                  </View>
                  <View className='mt-auto'>
                     <Text className='text-black text-xs text-center'>{item.title}</Text>
                  </View>
               </TouchableOpacity>
            )
         }}
      />
   )
}
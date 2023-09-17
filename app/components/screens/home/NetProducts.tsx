import { FC, useEffect, useState } from "react"
import { Text, View } from "react-native"
import { CategoriesType, IProduct, products } from "@/store/data"
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { Loader } from "@/components/ui/Loader"
import { DrinkCard } from "@/components/ui/DrinkCard"
import MasonryList from '@react-native-seoul/masonry-list'

interface IProps {
   category: CategoriesType | ''
   searchValue: string
}

export const NetProducts: FC<IProps> = ({ category, searchValue }) => {
   const [isLoading, setIsLoading] = useState<boolean>(false)

   useEffect(() => {
      setIsLoading(true)

      const timeout = setTimeout(() => {
         setIsLoading(false)
      }, 400)

      return () => clearTimeout(timeout)
   }, [category])

   const handleSorting = (): IProduct[] => {
      return products.filter((e) => {
         const matchesCategory = !category || e.category === category
         const matchesSearch = !searchValue || e.title.toLowerCase().includes(searchValue.toLowerCase())
         return matchesCategory && matchesSearch
      })
   }

   return (
      <View className='mt-5'>
         <Text className='mb-5 text-xl text-light-black font-semibold'>{category ? category : searchValue ? `Пошук по запиту ${searchValue}` : 'Усі напої'}</Text>
         {isLoading ? (
            <View style={{ marginTop: hp(18), alignItems: 'center' }}>
               <Loader />
            </View>
         ) : (
            <MasonryList
               data={handleSorting()}
               keyExtractor={(item) => item.id.toString()}
               renderItem={
                  ({ item, i }: { item: unknown, i: number }) => <DrinkCard item={item} idx={i} />
               }
            />
         )}
      </View >
   )
}
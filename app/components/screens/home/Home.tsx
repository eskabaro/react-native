import { FC, useState } from "react"
import { Layout } from "@/components/layout/Layout"
import { Text } from "react-native"
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { Input } from "@/components/ui/Input"
import { Carusel } from "./Carusel"
import { CategoriesType } from "@/store/data"
import { NetProducts } from "./NetProducts"

export type SetCategoriesType = CategoriesType | ''

export const Home: FC = () => {
   const [currentCategory, setCurrentCategory] = useState<SetCategoriesType>('')
   const [searchValue, setSearchValue] = useState<string>('')

   return (
      <Layout>
         <Text
            className='font-bold mt-5 text-neutral-400 leading-10'
            style={{ fontSize: hp(4.4) }}
         >Замовляй каву залишаючись <Text className='text-primary'>вдома</Text></Text>
         <Input setSearchValue={setSearchValue} />

         <Carusel setCategory={setCurrentCategory} />

         <NetProducts category={currentCategory} searchValue={searchValue} />
      </Layout>
   )
}
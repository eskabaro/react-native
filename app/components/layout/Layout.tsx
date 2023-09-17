import { FC, PropsWithChildren } from "react"
import { useRoute } from "@react-navigation/native"
import { View, ScrollView } from "react-native"
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { EScreens } from "../navigation/screens"


export const Layout: FC<PropsWithChildren<unknown>> = ({ children }) => {
   const route = useRoute()
   const checkRouteName = route.name === EScreens.Details ? hp(1) : hp(2)

   return (
      <ScrollView
         className='bg-white'
         showsVerticalScrollIndicator={false}>
         <View
            className='bg-white border-t-header border-t-header-color'
            style={{ paddingLeft: checkRouteName, paddingRight: checkRouteName }}
         >
            {children}
         </View>
      </ScrollView>
   )
}
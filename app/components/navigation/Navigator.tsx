import { FC } from "react"
import { Text } from "react-native"
import { Home } from "../screens/home/Home"
import { Cart } from "../screens/cart/Cart"
import { Details } from "../screens/details/Details"
import { EScreens } from "./screens"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { RootStackParamList } from "./types"
import { AddToCart } from "../ui/AddTocart"
import Icon from 'react-native-vector-icons/Ionicons'

const Stack = createNativeStackNavigator<RootStackParamList>()

export const Navigator: FC = () => {
   return (
      <Stack.Navigator
         screenOptions={{
            headerStyle: {
               backgroundColor: '#fff',
            },
            headerTintColor: '#000',
            headerTitleStyle: {
               fontWeight: '500',
               fontSize: wp(4)
            },
            headerShadowVisible: false,
            headerTitleAlign: 'center'
         }}
         initialRouteName={EScreens.Home}
      >
         <Stack.Screen
            options={({ navigation }) => ({
               title: '',
               headerRight: () => (
                  <Icon
                     name='cart-outline'
                     size={wp(6.5)}
                     color={'#000'}
                     onPress={() => navigation.navigate(EScreens.Cart)}
                  />
               ),
               headerLeft: () => (
                  <Text
                     className='text-primary text-xl'
                     style={{ fontFamily: 'Pacifico-Regular' }}
                  >
                     Foody
                  </Text>
               )
            })}
            name={EScreens.Home}
            component={Home}
         />
         <Stack.Screen
            options={{ title: 'Моя корзина' }}
            name={EScreens.Cart}
            component={Cart}
         />
         <Stack.Screen
            options={() => ({
               title: 'Деталi',
               headerRight: () => <AddToCart />
            })}
            name={EScreens.Details}
            component={Details}
         />
      </Stack.Navigator>
   )
}
import type { RouteProp } from '@react-navigation/native';
import { EScreens } from './screens';
import { IProduct } from '@/store/data';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
   Home: undefined
   Cart: undefined
   Details: {
      item: IProduct
   }
}

export type Props = NativeStackScreenProps<RootStackParamList, EScreens.Details>;
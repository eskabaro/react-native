import { FC, useState } from "react"
import { Picker } from '@react-native-picker/picker';
import { View } from "react-native";
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'

interface IProps {
   options: string[],
   marginTop?: number
   marginBottom?: number
}

export const CustomSelect: FC<IProps> = ({ options, marginTop, marginBottom }) => {
   const [selectedValue, setSelectedValue] = useState<string>('default')

   return (
      <View
         className='flex flex-row justify-center'
         style={{
            paddingLeft: hp(2),
            paddingRight: hp(2),
            marginTop: marginTop,
            marginBottom: marginBottom
         }}
      >
         <View
            className='border-2 border-green rounded-xl w-full'
            style={{ maxWidth: hp(40) }}
         >
            <Picker
               style={{ color: '#666666' }}
               selectedValue={selectedValue}
               onValueChange={itemValue => setSelectedValue(itemValue)}
            >
               {options.map((e, i) => <Picker.Item key={i} label={e} value={e} />)}
            </Picker>
         </View>
      </View>
   )
}
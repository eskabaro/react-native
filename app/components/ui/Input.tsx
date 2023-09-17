import { Dispatch, FC, SetStateAction, useState } from "react"
import { Button, TextInput, TouchableOpacity, View } from "react-native"
import Icon from 'react-native-vector-icons/Ionicons';

interface IProps {
   setSearchValue: Dispatch<SetStateAction<string>>
}

export const Input: FC<IProps> = ({ setSearchValue }) => {
   const [value, setValue] = useState<string>('')
   return (
      <View className='bg-light-text rounded-3xl flex flex-row justify-between items-center mt-5 pl-2 pr-2'>
         <TextInput
            className='flex-1 text-light-black'
            placeholder='Пошук...'
            onChangeText={setValue}
            value={value}
            onSubmitEditing={() => setSearchValue(value)}
            placeholderTextColor={'#666666'}
         />
         <TouchableOpacity onPress={() => setSearchValue(value)} className='bg-primary p-2 rounded-full'>
            <Icon name="search" size={20} color='#fff' />
         </TouchableOpacity>
      </View>
   )
}
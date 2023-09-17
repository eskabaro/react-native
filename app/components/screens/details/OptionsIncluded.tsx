import { CustomSelect } from "@/components/ui/CustomSelect";
import { espressoAndShotOptins, ins } from "@/store/data";
import { FC } from "react";
import { Text } from "react-native";
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'

export const OptionsIncluded: FC = () => {
   return (
      <>
         <Text
            style={{ paddingLeft: hp(2), paddingRight: hp(2) }}
            className='text-2xl font-bold mt-4 text-light-black'
         >Що включено</Text>

         <CustomSelect
            options={ins}
            marginBottom={16}
            marginTop={16}
         />

         <CustomSelect
            options={espressoAndShotOptins}
            marginBottom={16}
         />
      </>
   )
}
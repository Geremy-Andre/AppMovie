import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { View , Text, Button} from 'react-native'

export const DetailScreen = () => {
  const navigation=useNavigation();
  return (
    <View>
        <Text>Detailscreen</Text>
        <Button
          title='ir a home1'
          onPress={()=>navigation.navigate('HomeScreen')}
        />
    </View>
  )
}

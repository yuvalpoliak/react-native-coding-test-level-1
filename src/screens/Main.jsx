import { useNavigation } from '@react-navigation/native'
import 'react'
import {Button, View} from 'react-native'

export default Main = () => {

    const nav = useNavigation()

    const navigateToForm = () => {
        nav.navigate('form')
    }
    return(
        <View>
            <Button title="Contact Us" onPress={navigateToForm}/> 
        </View>
    )
}
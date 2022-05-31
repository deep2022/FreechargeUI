import React from 'react'
import {View,Text,Button} from 'react-native'

const Mock = ({user}) => {

    return(
        <View style={{flex:1,backgroundColor:'red'}}>
           <Text>Hello world</Text>
           <Button title='Merchant Page' onPress={() => console.log('Merchant')}/>
        </View>
    )
}

export default Mock;
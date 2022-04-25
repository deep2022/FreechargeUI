import React from 'react'
import {View,Text,Image} from 'react-native'
import data from '../localdata/uidata'
import Icon from 'react-native-vector-icons/Ionicons'
const Header = () => {
    return(
        <View style={{flexDirection:'row',padding:7,paddingRight:15,justifyContent:'space-between'}}>
            <View style={{flexDirection:'row',paddingHorizontal:5}}>
            <Image style={{height:50, width:50,borderRadius:30}} source={{uri:data.image[0].uri}} />
            <View style={{flexDirection:'column',padding:4,marginLeft:10}}>
                <Text style={{color:'#444444',fontSize:16,fontWeight:'700',marginBottom:4}}>Maya ThomasKutty</Text>
                <Text style={{color:'black',fontSize:14,fontWeight:'400'}}>87653820112</Text>
            </View>
            </View>
            <View style={{flexDirection:'row',alignSelf:'center'}}> 
            <Icon name={'headset-outline'} size={30} color={'orange'} style={{paddingVertical:7,backgroundColor:'white',elevation:10,borderRadius:26,paddingHorizontal:7,marginEnd:15,marginHorizontal:5}} />
            <Icon name={'qr-code-outline'} size={30} color={'orange'} style={{paddingVertical:7,backgroundColor:'white',elevation:10,borderRadius:28,paddingHorizontal:7,marginHorizontal:5}} />
            </View>
        </View>
    )
}

export default Header
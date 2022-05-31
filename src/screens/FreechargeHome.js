import React,{useState} from "react"
import {View, Text, StatusBar,TouchableOpacity,TextInput,Image} from 'react-native'
import SmsAndroid from 'react-native-get-sms-android';
import FlatScrollView from "../components/FlatScrollView"
import Header from "../components/HeaderFreeCharge"
import Content from '../components/HomeContent'
import CardNav from '../navigation/cardIndex'
import Cibil from "../components/Cibil";
import Icon from 'react-native-vector-icons/Ionicons'
import { Button } from "react-native-paper";
// const Content = React.lazy(()=> import('../components/HomeContent'))
// const CardNav = React.lazy(()=> import('../navigation/cardIndex'))
const RNFS = require('react-native-fs')
var filter = {
    box: 'inbox',
    read: 1, // 0 for unread SMS, 1 for SMS already read
    /** the next 2 filters can be used for pagination **/
    indexFrom: 0, // start from index 0
    maxCount: 10, // count of SMS to return each time
  };
  
  SmsAndroid.list(
    JSON.stringify(filter),
    (fail) => {
      console.log('Failed with this error: ' + fail);
    },
    (count, smsList) => {
    //   console.log('Count: ', count);
    //   console.log('List: ', smsList);
    //   var arr = JSON.parse(smsList);
  
    //   arr.forEach(function(object) {
    //     console.log('Object: ' + JSON.stringify(object));
    //     console.log('-->' + object.date);
    //     console.log('-->' + object.body);
    //   });
    },
  );
  
  SmsAndroid.autoSend(
    '+919643724969',
    'This is a test message',
    (fail) => {
      console.log('Failed with this error: ' + fail);
    },
    (success) => {
    },
  );
const FreeChargeHome = ({navigation}) => {
    const [open,setOpen] = useState(true)
    return(
        <>
        <FlatScrollView style={{backgroundColor:'#eff1f6',flex:1}} showsVerticalScrollIndicator={false}>
            <StatusBar backgroundColor={'#eff1f6'} barStyle={'dark-content'} />
            <Header />
            <View style={{flex:1,backgroundColor:'white',height:open ? 400: 355,marginHorizontal:10,borderRadius:10,marginTop:20,marginBottom:5}}>
                <CardNav />
                <View style={{height:60,paddingHorizontal:20,paddingVertical:10}}>
                    <Text style={{fontSize:18,fontWeight:'700',color:'black'}}>₹ 5304</Text>
                    <Text style={{color:'black'}}>38 Transactions <Text style={{fontStyle:'italic'}}>(Total amount received today)</Text></Text>
                </View>
                { open &&
                <View style={{height:55,backgroundColor:'#ffeee6',padding:2,paddingHorizontal:9,flexDirection:'row',borderBottomLeftRadius:10,borderBottomRightRadius:10,justifyContent:'center',alignItems:'center',paddingHorizontal:15}}>

                    <Text style={{color:'black',width:'85%',fontSize:10,justifyContent:'center',paddingHorizontal:5}}>Instant settlement for ₹5304 was failed & the same will be transferred with the next automatic settlement</Text>
                    <TouchableOpacity onPress={()=> setOpen(false)} style={{justifyContent:'center'}}><Text style={{color:'#ff7744',fontWeight:'700'}}>GOT IT</Text></TouchableOpacity>
                </View>
                }
            </View>
            <Cibil value={900} />
            <Content navigation = {navigation} />
        </FlatScrollView>
    </>
    )
}
FreeChargeHome.whyDidYouRender = false
export default FreeChargeHome
import React,{useState,useEffect} from "react"
import {View, Text, StatusBar,ScrollView,Image,TextInput,TouchableOpacity,Dimensions,FlatList,SafeAreaView,Button} from 'react-native'
import FlatScrollView from "../components/FlatScrollView"
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Entypo from 'react-native-vector-icons/Entypo'
import data from "../localdata/uidata"
import CardNav from "../navigation/cardIndex"
import AnimatedLottieView from 'lottie-react-native'
import Header from "../components/HeaderFreeCharge"
import Content from "../components/HomeContent"

const FreeChargeHome = ({navigation}) => {
    const [open,setOpen] = useState(true)
    const [text,setText] = useState('')
    const [load,setLoad] = useState(true)
    useEffect(()=> {
        setTimeout(()=> setLoad(false),1000)
    },[])
    return(
        <>
        {
            load ?
            <AnimatedLottieView style={{backgroundColor:'transparent'}} source={require('../loader.json')} autoPlay loop />
            :
        <FlatScrollView style={{backgroundColor:'#eff1f6',flex:1,marginBottom:40}} showsVerticalScrollIndicator={false}>
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
            <Content navigation = {navigation} />
        </FlatScrollView>
        }
    </>
    )
}

export default FreeChargeHome
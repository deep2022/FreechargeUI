import React,{useState,useEffect,useContext} from "react"
import {View, Text, StatusBar,ScrollView,Image,TextInput,TouchableOpacity,Dimensions,FlatList,SafeAreaView,Button,LogBox,InteractionManager} from 'react-native'
import FlatScrollView from "../components/FlatScrollView"
import CardNav from "../navigation/cardIndex"
import Header from "../components/HeaderFreeCharge"
import Content from "../components/HomeContent"
import Loader from '../components/Loader'
import {Load} from '../context/LoadingContext'


let i = 1;
const FreeChargeHome = ({navigation}) => {
    const [open,setOpen] = useState(true)
    LogBox.ignoreAllLogs()
    const {setLoad} = useContext(Load)
    useEffect(()=> {
        setTimeout(()=> setLoad(false),5000)
    },[])
    return(
        <>
        <Loader />
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
            <Content navigation = {navigation} />
        </FlatScrollView>
    </>
    )
}

export default FreeChargeHome
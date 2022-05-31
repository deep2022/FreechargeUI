import React,{useState,useEffect,useRef} from 'react'
import {View,Text,TouchableOpacity,Image,Animated} from 'react-native'
import { Easing } from 'react-native-reanimated'
import Icon from 'react-native-vector-icons/Ionicons'
import Range from './RangeGradient'

const Cibil = (props) => {
    const v = new Animated.Value(0)
    const {value} = props
    const [val,setVal] = useState(0)
    function textAnimate(){
        v.addListener(({value})=> setVal(Math.round(value)))
        Animated.timing(v,{
            toValue: value,
            duration: 1000,
            delay:100,
            easing:Easing.ease,
            useNativeDriver: false
        }).start()
    }
    useEffect(()=> {
        textAnimate()
    },[value])
    return(
        <View style={{backgroundColor:'white',padding:10,margin:10,borderRadius:10}}>
            <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:'2%'}}>
                <View style={{flexDirection:'row'}}>
                <Icon name="md-chevron-back-sharp" size={26} color={'black'} />
                <Text style={{fontSize:20,color:'black',fontWeight:'500'}}>Your CIBIL Insights</Text>
                </View>
                <Image style={{width:50,height:30}} source={{uri:'data:image/png;base64,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'}} />
            </View>
            <View style={{justifyContent:'center',alignItems:'center'}}>
            <Animated.View>
                <Text style={{color:'black',fontSize:36,fontWeight:'bold',paddingVertical:10}}>{val}</Text>
            </Animated.View>
            <Range value={value} />
            <Text style={{color:'black',fontSize:18,paddingTop:10}}>Your Credit score is</Text>
            <Text style={{fontWeight:'700',color:'black',fontSize:18}}>Average</Text>
            <Text style={{fontSize:16,width:'65%',textAlign:'center',paddingTop:10}}>You are in top 22% of average score of Freecharge A/C users </Text>
            <TouchableOpacity style={{borderColor:'#aaaaaa',borderRadius:25,borderWidth:1,height:50,marginVertical:10,marginTop:30,padding:5,paddingHorizontal:15,justifyContent:'center'}}>
              <Text style={{fontWeight:'600',fontSize:17}}>Refresh Available in 20 Days</Text>
            </TouchableOpacity>
            <Text style={{marginBottom:10}}>Last Updated on <Text style={{fontWeight:'500'}}>28 Feb 2022</Text></Text>
            </View>
            </View>
    )
}

export default Cibil
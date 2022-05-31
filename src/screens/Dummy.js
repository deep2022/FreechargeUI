import React, {useState, useEffect} from 'react'
import {View, Text,TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
const Dummy = () => {
    const [select, setSelect] = useState({})
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/deep2022/sample_data/main/CardData.json')
        .then(res => res.json())
        .then(res => setData(res))
        .catch(err => console.log(err))
    },[])
    return(
        <View style={{backgroundColor:'white',flex:1,paddingTop:10,borderBottomWidth:1,borderBottomColor:'#eeeeff',elevation:5}}>
            {data.length !==0 ? 
            data.map(i => (
                <View key={i.time} style={{borderBottomWidth:1,borderBottomColor:'#cccccc'}}>
                <TouchableOpacity onPress={()=> {if(select === '' || select !== i){setSelect(i)}}} style={{backgroundColor:select.time === i.time? '#ffeee6':'white',flexDirection:'row',justifyContent:'space-between',padding:10,paddingBottom:3}}>
                    <Text style={{color:select.time === i.time?'red':'#444444',width:100,textAlign:'center'}}>{i.time}</Text>
                    <Text style={{color:select.time === i.time?'red':'#444444',paddingHorizontal:10,width:80,fontWeight:'900',fontSize:16}}>₹ {i.amount}</Text>
                    <Text style={{color:select.time === i.time?'red':'#444444',paddingHorizontal:10,width:150}}>{i.transaction}</Text>
                </TouchableOpacity>
                </View>
            ))
            :
            <Text style={{fontSize:20,height:50}}>Loading...</Text>
        }
            <View style={{flexDirection:'row',justifyContent:'center',marginTop:10,padding:5,elevation:10}}>
            <TouchableOpacity style={{backgroundColor:'white',marginHorizontal:10,padding:7,justifyContent:'center',elevation:10,borderRadius:15,flexDirection:'row'}}>
                <Text style={{fontWeight:'600',color:'#ff7744'}}>Refresh </Text>
                <Icon name={'refresh'} size={16} color={'#ff7744'} style={{marginTop:1}} />
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor:'white',marginHorizontal:10,padding:7,justifyContent:'center',elevation:10,borderRadius:15,flexDirection:'row'}}>
                <Text style={{fontWeight:'600',color:'#ff7744'}}>View all </Text>
                <Icon name={'arrow-forward'} size={16} color={'#ff7744'} style={{marginTop:1}} />
            </TouchableOpacity>
            </View>
        </View>
    )
}
export default Dummy
import React,{useState,useEffect} from 'react';
import { Text,View,Button,PermissionsAndroid } from 'react-native';
import {CardNav,Nav} from './src/navigation'
const app = () => {
  const [set, setSet] = useState('')
  useEffect(()=> {
    requestSMSPermission()
  },[])
  const requestSMSPermission = async () => {
    try {
      const granted =  await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.READ_SMS,
        PermissionsAndroid.PERMISSIONS.SEND_SMS
      ]
      );
     } catch (err) {
      console.warn(err);
    }
  }
  return(
    <>
      {
      set === '' ? (
      <View>
        <Text>Hello User, what you want to do next</Text>
        <Button title='Main Menu' onPress={() => setSet('Main')}/>
        <Button title='Card Menu' onPress={() => setSet('Card')} />
      </View>
      )
      : set === 'Main' ? <Nav /> : <CardNav />
      }
    </>
  )
}
export default app;
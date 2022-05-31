import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { NavigationContainer } from '@react-navigation/native'
import FreeChargeHome from '../screens/FreechargeHome'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator()

const TabNav = () => {
    return (
        <Tab.Navigator
        screenOptions={({route}) => ({
            tabBarStyle:{borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                height:65,
                position: 'absolute',
                elevation: 0,
                },
            headerShown:false,
            tabBarLabelStyle: {fontSize:13,marginBottom:10},
            tabBarActiveTintColor:'red',
            tabBarHideOnKeyboard:true,
            tabBarIcon: ({ focused }) => {
                let iconName,iconColor;
                if (route.name === 'Home') {
                  iconName = focused? 'home': 'home-outline';
                  iconColor = focused ? 'red':'grey'
                } else if (route.name === 'Transactions') {
                  iconName = focused ? 'document-text' : 'document-text-outline';
                  iconColor = focused ? 'red':'grey'
                }
                else if(route.name === 'Account'){
                    iconName = focused ? 'person' : 'person-outline';
                    iconColor = focused ? 'red':'grey'
                }
        
                // You can return any component that you like here!
                return <Ionicons style={{marginTop:15}} name={iconName} size={20} color={iconColor} />;
              },
        })}
        >
            <Tab.Screen name='Home' component={FreeChargeHome} />
            <Tab.Screen name='Transactions' component={FreeChargeHome} />
            <Tab.Screen name='Account' component={FreeChargeHome} />
        </Tab.Navigator>
    )
}

const SecondNav = () => {
    return(
        <NavigationContainer>
            <TabNav />
        </NavigationContainer>
    )
}

module.exports =  SecondNav
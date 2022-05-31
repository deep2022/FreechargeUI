import React,{useContext} from 'react';
import AnimatedLottieView from 'lottie-react-native'
import { Load } from '../context/LoadingContext';

const Loader = () => {
    const {load} = useContext(Load)
    const call = () => {
        console.log('called')
    }
    return(
            <>
            {
            load ? <AnimatedLottieView style={{position:'absolute',opacity:0.85,top:0,bottom:0,left:0,right:0,backgroundColor:'grey',zIndex:100}} source={require('../loader.json')} autoPlay loop /> : null
            }
            </>
    )
};
export default Loader;
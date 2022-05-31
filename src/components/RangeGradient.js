import React,{useState,useEffect,useRef} from 'react'
import {View,Text,Animated,StyleSheet} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

const Range = (props) => {
    const [color, setColor] = useState(['hsl(0,100%,50%)','hsl(1,100%,50%)'])
    const {value} = props
    const num = Math.abs(300-value)/6
    const thumb = `hsl(${num},100%,47%)`
    const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: num,
      duration: 1000,
      delay:100,
      useNativeDriver:false
    }).start();
  };
    function slider(){
            setColor(['hsl(0,100%,50%)',`hsl(${num*0.6},100%,50%)`,`hsl(${num*1.2},100%,50%)`])
            fadeIn()
    }
    useEffect(()=> {
      if(value >=300){
        slider()
      }
    },[value])
    return(
        <View>
          { (value >=300 && value <=900) &&
            <View style={styles.container}>
            <Text style={styles.text}>300</Text>
            <View style={styles.subContainer}>
            <Animated.View style={{width:fadeAnim.interpolate({
              inputRange: [0,25,50,75,100],
              outputRange:['0%','25%','50%','75%','100%']
            })}}>
            <LinearGradient colors={color} style={styles.lineargradient} useAngle={true} angle={90}>
              <View style={[styles.linearview,{borderColor:`hsl(${num+10},90%,40%)`,backgroundColor:thumb}]} />
              </LinearGradient>
            </Animated.View>
            </View>
              <Text style={styles.text}>900</Text>
            </View>
          }
        </View>
    )
}
const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    marginHorizontal:10,
    justifyContent:'space-around'
  },
  subContainer: {
    width:'78%',
    backgroundColor:'#eeeeee',
    height:10,
    borderRadius:10,
    marginHorizontal:'1%',
    flexDirection:'row'
  },
  lineargradient: {
    height:10,
    borderRadius:5
  },
  linearview: {
    height:20,
    marginLeft:-5,
    top:-6,
    width:20,
    borderRadius:15,
    left:'97%',
    borderWidth:2
  },
  text: {
    color:'black',
    top:-5,
    fontSize:16,
    fontWeight:'400'
  }
})
export default Range
import { View, Text, StyleSheet,useWindowDimensions } from 'react-native'
import React from 'react'
import Colors from '@/constants/Colors'

export default function MediaQuery() {
    const windowWidth=useWindowDimensions().width
    const windowHeight=useWindowDimensions().height
  return (
    <View style={styles.dimensionContainer}>
    <View style={{justifyContent:'center',alignItems:'center',height:windowHeight>600?400:200,width:windowWidth>500?400:200,backgroundColor:windowWidth>500?Colors.primaryColor:Colors.black}}>
      <Text style={{color:Colors.white,fontSize:windowWidth>500?30:24}}>Media Query</Text>
    </View>
    </View>
  )
}
//const windowWidth=Dimensions.get('window').width
//const windowHeight=Dimensions.get('window').height
const styles=StyleSheet.create({
    dimensionContainer:{
        justifyContent:'center',
        alignItems:'center'
    }
})
import { View, Text, TextInput, StyleSheet, Button } from 'react-native'
import React, { useState } from 'react'
import Colors from '@/constants/Colors'
import { Link, useNavigation } from 'expo-router'
export default function Login() {
    const navigation=useNavigation()
    const [name,setName]=useState("")
    const [password,setPassword]=useState("")
    const [login,setLogin]=useState(false)
   
  return (
    <View style={styles.loginContainer}>
      <Text style={styles.loginText}>Login</Text>
      <View >
        <Text>User Name</Text>
        <TextInput style={styles.input} placeholder='Enter Name' value={name} onChangeText={setName}/>
        <Text>Password</Text>
        <TextInput style={styles.input}placeholder='Enter Password' secureTextEntry value={password} onChangeText={setPassword}/>
        {
            name.length>0 && password.length>0 ? <Link style={styles.button} href="/(tabs)"><Text>Login</Text></Link>:
            <Text>Please Fill All Fields</Text>
        }
      </View>
    </View>
  )
}
const styles=StyleSheet.create({
    loginContainer:{
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',

    },
    loginText:{
        fontSize:30,
        fontWeight:'bold'
    },
    input:{
        height:40,
        borderWidth:1,
        borderColor:Colors.primaryColor,
        borderRadius:10,
        padding:5
    },
    button:{
        color:Colors.white,
        backgroundColor:Colors.primaryColor,
        borderRadius:7,
        height:30,
        width:100,
        textAlign:'center',
        alignItems:'center',
        marginTop:20,
    }
})
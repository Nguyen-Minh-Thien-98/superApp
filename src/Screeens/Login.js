import React from 'react';
import {useDispatch} from 'react-redux';
import {View, Pressable, Text, Alert} from 'react-native';
import {login, logout} from '../Features/user';

const Login = () => {
  const dispatch = useDispatch();

  const onLoginHandler = () => {
     dispatch(login({name:'Thiennn', age: 25, email:'thienmak69@gmail.com'},'SET-Value'))
  }

  const onLogoutHandler = () => {
    dispatch(logout())
 }
  return (
    <View>
      <Pressable 
        style={{width: 100, height: 40, justifyContent: 'center', alignItems: 'center' ,backgroundColor: '#666', marginBottom: 20,}} 
        onPress={onLoginHandler}>
            <Text style={{color: '#fff', fontWeight: 'bold'}} >Login</Text>
      </Pressable>

      <Pressable 
        style={{width: 100, height: 40, justifyContent: 'center', alignItems: 'center' ,backgroundColor: '#b345',}} 
        onPress={onLogoutHandler}>
            <Text style={{color: '#fff', fontWeight: 'bold'}} >Logout</Text>
      </Pressable>
    </View>
  );
};

export default Login;

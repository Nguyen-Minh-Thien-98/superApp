import React from 'react';
import { useSelector } from 'react-redux';
import { View, Text, StyleSheet, Button } from 'react-native';
// Login
import Login from './Login';
// ChangeColor
import ChangeColor from '../Components/ChangeColor';

const Profile = () => {
    const user = useSelector((state) => state.user.value);
    const theme = useSelector((state) => state.theme.value);
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems:'center', backgroundColor: theme, }}>
            <Text>Name: {user.name}</Text>
            <Text>Age: {user.age}</Text>
            <Text>Email: {user.email}</Text>
            <Login/>
            <ChangeColor/>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default Profile;
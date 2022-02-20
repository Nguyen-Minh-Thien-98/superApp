import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { View, Button, TextInput } from 'react-native';
import { changeColor } from '../Features/theme';

const ChangeColor = () => {
    const[color, setColor] = useState('');
    const dispatch = useDispatch();
    return (
        <View>
            <TextInput
                style={{width: 200, borderWidth: 1, margin: 30}}
                placeholder='Type here to change color'
                onChangeText={value => setColor(value)}
                defaultValue={color}
                
             />
            <Button 
                title='ChangeColor' 
                onPress={() => dispatch(changeColor(color))}
                />
        </View>
    )
}

export default ChangeColor;
import React, {Component} from 'react';
import {Button, Text} from 'native-base';

const ButtonComp = ({titlex, onPress, bgColor, textColor}) => (

<Button
    onPress={onPress}
    style={
        {
            marginBottom: 10,
            backgroundColor: bgColor
        }
    }>
    <Text style={{ color: textColor}}>{titlex}</Text>
</Button>
)

export default ButtonComp;
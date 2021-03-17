import React from 'react';
import { View,Text } from 'react-native';
import useStorage from './useStorage';
const progressBar =({file})=>{
    const {url,progress,error}=useStorage(file);
    console.log(progress,url);
    console.log("error is : -  ",error);
    return(
        <View>
            <Text>progress</Text>
        </View>
    )
};
export default progressBar;
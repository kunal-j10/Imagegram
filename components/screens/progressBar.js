import React from 'react';
import { View,Text } from 'react-native';
import useStorage from './useStorage';
const progressBar =({percentage})=>{
    // const {url,progress,error}=useStorage(file);
    // console.log(progress,url);
    // console.log("error is : -  ",error);
    return(
        <View>
            <Text>Uploading ..{percentage} %</Text>
        </View>
    )
};
export default progressBar;
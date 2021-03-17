import React from 'react';
import { View,Text,Image } from 'react-native';

const Display = ({uri})=>{
    return(
        <View style={{margin:20}}>
            <View style={{backgroundColor:'red',height:400}}>
                <Image source={{uri:uri}} style={{flex:1}}/>
            </View>
        </View>
    );
}
export default Display;
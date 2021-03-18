import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform, TextInput } from 'react-native';
import * as ImagePicker from 'react-native-image-picker';
import Display from './Display'

const UploadForm = ()=>{
// .........
        const [image,setImage]=useState(null);
        const [imageType,setImageType]=useState(null);
        const [imageSize,setImageSize]=useState(null);
        const [imageName,setImageName]=useState(null);
        const [fileName,setFileName]=useState(null);
        
        const options = {
            title: 'Pick an Image',
            storageOptions:{
                skipBackup:true,
                path:'images',
            },
        };
        const openPicker=()=>{
            ImagePicker.launchImageLibrary(options,(response)=>{
                if(response.didCancel)
                {
                    console.log();
                }
                else if(response.errorMessage)
                {
                    console.log('image picker error',response.errorMessage);
                }
                else
                {
                    const source = {uri: response.uri};
                    console.log(source);
                    setImage(response.uri);
                    setImageSize(response.fileSize);
                    setImageType(response.type);
                    setFileName(response.fileName);
                }
            })
        }

        const changeHandler=(text)=>{
               setImageName(text);
        }
        return(
            <View>
            <TextInput style={{borderWidth:1,margin:5,marginTop:20,marginBottom:20,color:'black'}}
                       placeholder="Enter Image Name"
                       onChangeText={(text)=>changeHandler(text)}/>
            <View style={{margin:15,marginRight:200}}>
            <Button
            title="open picker"
            onPress={openPicker}/>
            </View>
            {image && <Display uri={image}
                               fileName={fileName}
                               fileType={imageType}
                               imageName={imageName}
                               fileSize={imageSize}/>}
            

            </View>

        );
    }
export default UploadForm;
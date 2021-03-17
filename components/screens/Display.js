import React from 'react';
import { View,Text,Image, Button } from 'react-native';
import ProgressBar from './progressBar';
import firebase from 'firebase';
import {projectStorage} from '../firebase/config';
require("firebase/firestore")
require("firebase/firebase-storage")


const Display = ({uri,fileName,fileType})=>{
    const file={
        name:fileName,
        uri:uri,
        type:fileType
    }
    const saveHandler= async ()=>{
        const response = await fetch(file.uri);
        const blob = await response.blob();

        const task = projectStorage
                     .ref()
                     .child(`posts/${fileName}`)
                     .put(blob)
        
        const taskProgress = snapshot =>{
            console.log(`transferred: ${snapshot.bytesTransferred}`)
        }

        const taskCompleted = () =>{
            task.snapshot.ref.getDownloadURL().then((snapshot)=>{
                console.log(snapshot)
            })
        }
        const taskError = snapshot=>{
            console.log(snapshot)
        }

        task.on("state_changed",taskProgress,taskError,taskCompleted);
    }
    return(
        <View style={{margin:20}}>
            <View style={{backgroundColor:'red',height:400}}>
                <Image source={{uri:uri}} style={{flex:1}}/>
            </View>
            <View>
             <Text>Image name :- {fileName}</Text> 
             <Text>Image type :- {fileType}</Text>  
             {/* <ProgressBar file={file}/> */}
             <Button onPress={saveHandler}
                     title={'Save post'}/>
            </View>
        </View>
    );
}
export default Display;
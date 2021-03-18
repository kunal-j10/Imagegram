import React, { useState } from 'react';
import { View,Text,Image, Button } from 'react-native';
import ProgressBar from './progressBar';
import firebase from 'firebase';
import {projectStorage,projectFirestore} from '../firebase/config';
require("firebase/firestore")
require("firebase/firebase-storage")


const Display = ({uri,fileName,fileType,imageName,fileSize})=>{
    const file={
        name:fileName,
        uri:uri,
        type:fileType,
        imageName:imageName
    }
    const [percentage,setPercentage]= useState(null);

    const saveHandler= async ()=>{
        const response = await fetch(file.uri);
        const blob = await response.blob();

        const task = projectStorage
                     .ref()
                     .child(`posts/${imageName}`)
                     .put(blob)
        
        const taskProgress = snapshot =>{
            console.log(`transferred: ${(snapshot.bytesTransferred/snapshot.totalBytes)*100}`)
            setPercentage((snapshot.bytesTransferred/snapshot.totalBytes)*100);
        }

        const taskCompleted = () =>{
            task.snapshot.ref.getDownloadURL().then((snapshot)=>{
                console.log(snapshot)
                savePostData(snapshot);
            })
        }
        const taskError = snapshot=>{
            console.log(snapshot)
        }

        task.on("state_changed",taskProgress,taskError,taskCompleted);
    }
    
    const savePostData=(DownloadURL)=>{
        projectFirestore.collection('posts')
                        .add({
                            url: DownloadURL,
                            name:imageName,
                            //creation: projectFirestore.FieldValue.serverTimestamp()
                        })
                        .then(()=>{
                            console.log("added on firestore")
                        })
    }

    return(
        <View style={{margin:20}}>
            <View style={{backgroundColor:'red',height:400}}>
                <Image source={{uri:uri}} style={{flex:1}}/>
            </View>
            <View>
             <Text style={{color:'red'}}>{fileName}</Text> 
             <Text>size:- {(fileSize)/1048576} mb</Text>
             <View>
             <ProgressBar percentage={percentage}/>
             </View>
             <Button onPress={saveHandler}
                     title={'Save post'}/>
            </View>
        </View>
    );
}
export default Display;
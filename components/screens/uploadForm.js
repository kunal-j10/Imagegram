import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform } from 'react-native';
import * as ImagePicker from 'react-native-image-picker';
import Display from './Display'
// import * as ImagePicker from 'expo-image-picker';
// import * as Permissions from 'expo-permissions';

const UploadForm = ()=>{
//     const [hasGallaryPermission,setHasGallaryPermission] = useState(null);
//     const [image, setImage] = useState(null);
//     useEffect(() => {
//         (async () => {
//             const gallaryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();
//             setHasGallaryPermission(gallaryStatus.status === 'granted');
          
//         })();
//       }, []);

//       const pickImage = async () => {
//         let result = await ImagePicker.launchImageLibraryAsync({
//           mediaTypes: ImagePicker.MediaTypeOptions.Images,
//           allowsEditing: true,
//           aspect: [1, 1],
//           quality: 1,
//         });
    
//         console.log(result);
    
//         if (!result.cancelled) {
//           setImage(result.uri);
//         }
//       };

//     if(hasGallaryPermission === false){
//         return <View/>;
//     }
//     if(hasGallaryPermission === false){
//         return <Text>No Access to gallary</Text>;
//     }

//     return (
//         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//           <Button title="Pick an image from camera roll" onPress={pickImage} />
          
//         </View>
//       )
// }

// .........
        const [image,setImage]=useState(null);
        const [imageType,setImageType]=useState(null);
        const [imageSize,setImageSize]=useState(null);
        const [imageName,setImageName]=useState(null);
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
                    setImageName(response.fileName);
                }
            })
        }
        return(
            <View>
            <Button
            title="open picker"
            onPress={openPicker}/>
            {image && <Display uri={image}
                               fileName={imageName}
                               fileType={imageType}/>}
            </View>

        );
    }
export default UploadForm;
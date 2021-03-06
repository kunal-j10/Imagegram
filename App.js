import React,{useState} from 'react';
import {View,Text,Modal, Button} from 'react-native';
import UploadForm from './components/screens/uploadForm';
import Geolocation from '@react-native-community/geolocation';


const App =()=>{

  const [ModalVisibility,setModalVisibility]=useState(false);
  Geolocation.getCurrentPosition(info => console.log(info));
  return(

    <View style={{alignContent:'center',justifyContent:'center'}}>
      
      <Text>Welcome to home</Text>
      
      <Button
      onPress={()=>{setModalVisibility(true)}}
      title="Open Modal"/>

      <Modal visible={ModalVisibility}>

      <UploadForm/>
      <View style={{justifyContent:'center',alignItems:'center',marginTop:25}}>
      <Button
      onPress={()=>{setModalVisibility(false)}}
      title="Close Modal"
      />
      </View>
      </Modal>

    
    </View>
  );
}

export default App;

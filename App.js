import React,{useState} from 'react';
import {View,Text,Modal, Button} from 'react-native';
import UploadForm from './components/screens/uploadForm';

const App =()=>{

  const [ModalVisibility,setModalVisibility]=useState(false);
  return(

    <View style={{alignContent:'center',justifyContent:'center'}}>
      
      <Text>Welcome to home</Text>
      <UploadForm/>
      {/* <Button
      onPress={()=>{setModalVisibility(true)}}
      title="Open Modal"/> */}

      <Modal visible={ModalVisibility}>

      
      <Button
      onPress={()=>{setModalVisibility(false)}}
      title="Close Modal"/>
      </Modal>

    
    </View>
  );
}

export default App;

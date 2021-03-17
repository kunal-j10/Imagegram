import {useState,useEffect} from 'react';
import {projectStorage} from '../firebase/config';
import firebase from 'firebase';

const useStorage=(file)=>{
    const [progress,setProgress]=useState(0);
    const [error,setError] =  useState(null);
    const [url,setUrl]=useState(null);
    useEffect(()=>{
        //refrences
        const storageref= projectStorage.ref(`images/${file.name}`);
        storageref.put(file).on('state_changed',(snap)=>{
            let percentage = (snap.bytesTransferred / snap.totalBytes)*100
            setProgress(percentage);
        },(err)=>{
            setError(err);
        },async ()=>{
            const url = await storageref.getDownloadURL();
            setUrl(url);
        })
    },[file]);

    return{ progress, url, error }
}
export default useStorage;
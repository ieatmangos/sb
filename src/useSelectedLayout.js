/* eslint-disable */
import React from "react";
import {useFirebase} from './firebase/FirebaseContext'

export const useSelectedLayout = () => {
  let mounted = true
  const [items, setItems] = React.useState(null)
  const saveName = JSON.parse(localStorage.getItem('selected')) || null
  const firebase = useFirebase()
 
  React.useEffect(()=>{
    
saveName && mounted &&
      firebase.items().child(saveName).on("value", snapshot => {
        const data = snapshot ? snapshot.val() : null
        if(data ){setItems(data)};
      });
      return ()=> mounted = false
    
  },[firebase,saveName, mounted])
  

  return items
}


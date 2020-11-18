import React from "react";
import { useFirebase } from "../../firebase/FirebaseContext";
import { v4 as uuid } from "uuid";

export const useFirebaseData = () => {
  const firebase = useFirebase();
  const [fbState, setFbState] = React.useState([]);
  React.useEffect(() => {
    let mounted = true
    // grab items from firebase and format them before setting state
   firebase.items().on("value", snapshot => {
      const data = snapshot ? snapshot.val() : null
      const formatedData = data ?  formatFirebaseItems(data) : null;
      if(mounted &&formatedData){setFbState(formatedData)};
    });
    return () => mounted = false
  
  }, [firebase, setFbState]);

  return fbState;
};

export const useFirebaseDataOnce = () => {
  const firebase = useFirebase();
  const [fbState, setFbState] = React.useState([]);
  React.useEffect(() => {
    let mounted = true
    // grab items from firebase and format them before setting state
   firebase.items().once("value", snapshot => {
      const data = snapshot.val();
      const formatedData = formatFirebaseItems(data);
      mounted && setFbState(formatedData);
    });
    return () => mounted = false
    
  }, [firebase, setFbState]);

  return fbState;
};

// ============================================== //
// ============================================== //
export const compareSaveAndSelected = () => {
  const saveName = JSON.parse(localStorage.getItem("savename"));
  const selected = JSON.parse(localStorage.getItem("selected"));
  if (saveName === selected) {
    return true;
  } else return false;
};

// ============================================== //
// ============================================== //
export const renderConfirm = (name, type, firebase) => {
  const areTheSame = compareSaveAndSelected();

  let isOverriding = false;

  firebase &&
    firebase.items().once("value", snapshot => {
      const data = snapshot.val();
      let result = data ? Object.entries(data).filter(i => i[0] === name) : [];
      if (result.length < 1) {
        return (isOverriding = false);
      } else return (isOverriding = true);
    });

  const words = `You are about to ${type} file:\n${name}`;
  if (!areTheSame && type !== "delete" && !isOverriding) {
    return true;
  } else if (areTheSame || type === "delete" || isOverriding) {
    var response = window.confirm(words);
  }
  if (response) {
    return response;
  }
};

// ============================================== //
// ============================================== //
export const formatFirebaseItems = firebaseItems => {
  const items = firebaseItems
    ? Object.entries(firebaseItems).map(([key, value]) => [key, value])
    : [];
  return items;
};

// ============================================== //
// ============================================== //
export const reorder = (list, startIndex, endIndex) => {
  const [removed] = list.splice(startIndex, 1);
  list.splice(endIndex, 0, removed);
  return list;
};

// ============================================== //
// ============================================== //
export const copy = (
  source,
  destination,
  droppableSource,
  droppableDestination
) => {
  const item = source[droppableSource.index];
  destination.splice(droppableDestination.index, 0, { ...item, id: uuid() });
  return destination;
};

// ============================================== //
// ============================================== //
export const formatFB = (data, saveName) =>{
  const savedData =  data.filter( i => i[0] === saveName)
  if (savedData[0]){
    return savedData[0][1]
  }
}

// ============================================== //
// ============================================== //
export function shallowEqual(object1, object2) {
  const keys1 = Object.keys(object1 || []) ;
  const keys2 = Object.keys(object2 || []) ;

  if (keys1.length === 0 || keys2.length === 0){
    return true
  }
  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key of keys1) {
    if (object1[key].id !== object2[key].id) {
      return false;
    }
  }

  return true;
}
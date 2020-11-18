import React from 'react'
import { useFirebase } from "../../firebase/FirebaseContext";

const useEdit = (defaults, id, comesFromIframe) => {
  // our state which we return in this hook 
  const [editable, setEdited] = React.useState(()=>defaults);
  
  // Grab the selected Layout
  const saveName = JSON.parse(localStorage.getItem("selected"));

  // Find the correct instance of the component from firebase
  const firebase = useFirebase();

    var _thisInstance = null
    saveName &&
      saveName.length > 0 &&
      firebase
        .items()
        .child(saveName)
        .once("value", (snapshot) => {
          _thisInstance = snapshot.val() ? snapshot.val().filter((i) => i.id === id) : null;
          // (_thisInstance && (thisInstance !== _thisInstance) ) && setThisInstance(_thisInstance)
        });


  // Pulls editable data from firebase and overrides local state, only if they are different
  React.useEffect(() => {
    if (_thisInstance && _thisInstance[0] && _thisInstance[0].data) {
      const myData = _thisInstance[0].data;
      const a = JSON.stringify(myData).length;
      const b = JSON.stringify(editable).length;
      if (a !== b) {
        setEdited(myData);
      } 
    }
  }, [_thisInstance, editable]);

//   const [mount, set] = React.useState('wait')

//   React.useEffect(()=>{
//   const a = JSON.stringify(editable).length
//   const b = JSON.stringify(defaults).length
//     if(a===b){
//       set('wait')
//     }

// },[editable, defaults])

// React.useEffect(()=>{
//   const timer = setTimeout(()=>{set('mount')},2000)
//   return ()=> clearTimeout(timer)
// },[mount])


// const a = JSON.stringify(editable).length
// const b = JSON.stringify(defaults).length
// if(a===b){
//   console.log('defaults')
// }

// if(mount === 'mount')
  return editable
} 
export default useEdit
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Firebase from "./firebase/Firebase";
import { FirebaseContext } from "./firebase/FirebaseContext";
import { Global } from "./global";
import {EditMyData} from './edit'
import "./styles/index.css";
import "./index.css";

 
const WithEdit = ({ children }) => {
  const [editMyData, setEditMyData] = React.useState([]);
  return (
    <EditMyData.Provider value={{ editMyData, setEditMyData }}>
      {children}
    </EditMyData.Provider>
  );
};

const WithGlobalState = ({children}) => {
  const [items, setItems] = React.useState([]);
  return (
    <Global.Provider value={{ items, setItems }}>
     {children}
    </Global.Provider>
  );
};
ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <WithGlobalState >
      <WithEdit>
          <App />
      </WithEdit>
    </WithGlobalState>
  </FirebaseContext.Provider>,
  document.getElementById("root")
);

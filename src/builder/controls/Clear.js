import React from 'react'
import { Global } from "../../global";

const Clear = () => {
  const { setItems } = React.useContext(Global);

  return(
    <button
    className="
      text-gray-600
      bg-transparent cursor-pointer
      hover:text-red-500 duration-100 ease-in 
      mr-2 md:mr-4
      "
    onClick={() => setItems([])}
  >
    CLEAR
  </button>
  )
}

export default Clear
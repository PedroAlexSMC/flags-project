import React, { useContext, useEffect, useState } from 'react'
import axios from "axios";

 export const FlagContext = React.createContext({})


export const FlagsProvider = (props) => {
    const [dataFlags, setDataFlags] = useState([])

    const changeDataFlags = (data)=>[
        setDataFlags(data)
    ]

    return (
    <FlagContext.Provider value={{dataFlags, changeDataFlags}}>
      {props.children}
    </FlagContext.Provider>
  )
}

export const useFlags = ()=> {useContext(FlagContext)}

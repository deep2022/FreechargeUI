import React, {createContext, useState} from 'react'
const Load = createContext();

// ContextAPI for updating Theme and Language in the settings page
const LoadProvider = (props) => {
    const [load, setLoad] = useState(true)
    return(
            <Load.Provider value = {{load,setLoad}}>
                {props.children}
            </Load.Provider>
    )
}
export {Load,LoadProvider}
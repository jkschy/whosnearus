import React from 'react'

export interface context {
    addNewRoute: (path: string, element?: JSX.Element) => void,
}

const global: context = {
    addNewRoute: (path: string, element?: JSX.Element) => {
    }
}

const AppContext = React.createContext(global);

export default AppContext;
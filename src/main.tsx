import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import 'material-icons/iconfont/material-icons.css'
import App from './App'

// const globalStore = { boy: 'Andrew', girl: 'Lena' }

// interface IGlobalStore {
//     boy?: string
//     girl?: string
// }

// export const GlobalContext = React.createContext<IGlobalStore>({})

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        {/* <GlobalContext.Provider value={globalStore}> */}
        <App />
        {/* </GlobalContext.Provider> */}
    </React.StrictMode>,
)

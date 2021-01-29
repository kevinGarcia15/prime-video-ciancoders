import React from 'react'

import Sidevar from '../containers/Sidevar'

function Layout({children}) {
    return (
        <div className="grid grid-cols-12 h-screen">
            <Sidevar/>
            {children}            
        </div>
    )
}

export default Layout

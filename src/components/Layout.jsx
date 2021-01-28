import React from 'react'

import Sidevar from '../containers/Sidevar'

function Layout({children}) {
    return (
        <div className="grid grid-cols-12">
            <Sidevar/>
            {children}            
        </div>
    )
}

export default Layout

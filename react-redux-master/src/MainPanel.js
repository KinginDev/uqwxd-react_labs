import React from 'react'
import MyButton from './components/myButton'
import DivPanel from './components/DivPanel'

const MainPanel = () => {
    return (
        <div>This is main panel 
            <MyButton></MyButton>
            <DivPanel />
        </div>
    )
}

export default MainPanel;
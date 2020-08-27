import React from "react"

import SpotData from "./SpotData"
import DestCard from "./DestCard"

function App(){
    const destComponents = SpotData.map(dest => <DestCard key={dest.id} location = {dest.location} price = {dest.price} time = {dest.timeToGo} />)
        
    return (
            <div>
                {destComponents}
            </div>
        )
    }

export default App
import React from "react"
import {Status, Wrapper} from "@googlemaps/react-wrapper";


const Map = () => {
    const render = (status: Status) => {
        return <h1>{status}</h1>
    }
    return (
        <>
            <Wrapper render={render} apiKey="AIzaSyAKqZo8ozuobixYzbFY37mmFm_UwG_mbuo">
                <h1>Test</h1>
            </Wrapper>
        </>
    )
}

export default Map;
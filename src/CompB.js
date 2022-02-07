import React from "react"
let CompB = (props) =>{
    console.log(props);
    return(
        <>
            <h1>
                hello {props.name}
            </h1>
        </>
    )
}
export default CompB;

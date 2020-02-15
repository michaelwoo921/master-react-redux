// import react and react-dom
import React from "react";
import ReactDOM from "react-dom";

// create a componenent functional component or class componenent

function App(){
    return <div> Hi there </div>;
}

// show the component in a browser

ReactDOM.render(<App />, 
    document.querySelector("#root"));

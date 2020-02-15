// import react and react-dom
import React from "react";
import ReactDOM from "react-dom";

// create a componenent functional component or class componenent

function App(){
    // use JS based style, put js var inside curly braces
    let btnText="submit";
    return (
        <form className="form" action="">
        <label htmlFor="name">Name </label>
        <input id="name" type="text"/>
        <button style={{backgroundColor: 'blue', color: 'white', padding: '10px' }}>{btnText} </button>
      </form>
    )
   

}

// show the component in a browser

ReactDOM.render(<App />, 
    document.querySelector("#root"));

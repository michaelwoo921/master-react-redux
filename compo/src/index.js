import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";


function CommentDetail(){
    return (
        <div className="comment">
        <a className="avatar" href="/">
            <img alt="avatar" src={faker.image.avatar()}/>
        </a>
        <div className="content">
          <a className="author">Matt</a>  
        
            <div className="metadata">
            <span className="date">Today at 5:42PM</span>
            </div>    
            <div className="text">
                A great post!
            </div>
        </div>
    </div>
    );
}
function App(){
    return (
        <div className="ui container comments">
           <CommentDetail />
           <CommentDetail />
           <CommentDetail />
           <CommentDetail />
        </div>
    );
}

ReactDOM.render(<App />,
    document.querySelector("#root"));

/* 
    
     
      
      */
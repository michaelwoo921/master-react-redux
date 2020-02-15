import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";


function CommentDetail(props){
    console.log(props);
    return (
        <div className="comment">
        <a className="avatar" href="/">
            <img alt="avatar" src={props.avatar}/>
        </a>
        <div className="content">
          <a className="author">{props.author}</a>  
        
            <div className="metadata">
            <span className="date">{props.timeAgo} </span>
            </div>    
            <div className="text">
                {props.content}
            </div>
        </div>
    </div>
    );
}
class App extends React.Component {

    render(){
       
        return (
            <div className="ui container comments">
               <CommentDetail author="Alex" content ="a great post!" timeAgo="Today 4:00PM" avatar={faker.image.avatar()}/>
               <CommentDetail author="Tom" content ="amazing" timeAgo="Today 6:30AM" avatar={faker.image.avatar()}/>
               <CommentDetail author="Jane" content="I love this post" timeAgo="Yesterday 7:45PM" avatar={faker.image.avatar()}/>
            </div>
        );
    }
  
}

ReactDOM.render(<App />,
    document.querySelector("#root"));

/* 
    
     
      
      */
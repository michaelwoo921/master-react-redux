import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";

function ApprovalCard(props){
    console.log(props.children);
    return (
        <div className="ui card">
            <div classname="content">
                {props.children}
            </div>
            <div className="extra content">
                <div className="ui two buttons">
                    <div className="ui basic green button">Approve</div>
                    <div className="ui basic red button">Decline</div>
                </div>
            </div>
        </div>
    );
}
/*
  <div class="ui cards">
 
    <div class="content">
      <img class="right floated mini ui image" src="/images/avatar/large/elliot.jpg">
      <div class="header">
        Elliot Fu
      </div>
      <div class="meta">
        Friends of Veronika
      </div>
      <div class="description">
        Elliot requested permission to view your contact details
      </div>
    </div>

*/
function CommentDetail(props){
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
               <ApprovalCard>
                 <CommentDetail author="Tom" content ="amazing" timeAgo="Today 6:30AM" avatar={faker.image.avatar()}/>
               </ApprovalCard>
                <ApprovalCard>
                 <CommentDetail author="Jane" content="I love this post" timeAgo="Yesterday 7:45PM" avatar={faker.image.avatar()}/>
               </ApprovalCard>
               <ApprovalCard>
                  <CommentDetail author="Alex" content ="a great post!" timeAgo="Today 4:00PM" avatar={faker.image.avatar()}/>
               </ApprovalCard>
               <ApprovalCard>
                  
                  <CommentDetail author="Alex" content ="a great post!" timeAgo="Today 4:00PM" avatar={faker.image.avatar()}/>
                  <h3> Are you sure about this?</h3>  
                </ApprovalCard>
            </div>
        );
    }
  
}

ReactDOM.render(<App />,
    document.querySelector("#root"));

/* 
  
    
      
       
      </div>
    </div>
  </div>
     
      
      */
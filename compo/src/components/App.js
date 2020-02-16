import React from "react";
import ApprovalCard from "./ApprovalCard";
import CommentDetail from "./CommentDetail";
import faker from "faker";

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

export default App;
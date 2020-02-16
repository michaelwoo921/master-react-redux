import React from "react";


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

export default CommentDetail;
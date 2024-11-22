import React, { useState } from "react";
import './PostIcons.css'
interface IPostIconsProps{
    type: 'Comment' | 'Retweet' | 'Like' | 'Views',
    count: number,
    postId: string
}
function PostIcons(props: IPostIconsProps) {
    const {type, count, postId} = props
    const [onFocus, setOnFocus] = useState(false)
    const getIcon = () => {
        switch(type){
            case 'Comment': return <i className="fa-regular fa-comment fa-sm m-1" style={{color: '#6a6a6a'}}></i>;
            case 'Retweet': return <i className="fa-solid fa-retweet fa-sm m-1" style={{color: '#6a6a6a'}}></i>;
            case 'Like': return <i className="fa-solid fa-heart fa-sm m-1" style={{color: '#6a6a6a'}}></i>;
            case 'Views': return <i className="fa-solid fa-chart-simple fa-sm m-1" style={{color: '#6a6a6a'}}></i>;
            default: return null;
        }
    }
  return (
    <div className="x-post-icons-body" onMouseEnter={()=>setOnFocus(true)} onMouseLeave={()=>setOnFocus(false)}>
      <div className="row">
        <div className="col align-items-center">
          {getIcon()}
          <span style={onFocus?{fontSize:'13px', color: '#1da1f2', marginLeft: '3px'}:{fontSize:'13px', color: 'white', marginLeft: '3px'}}>{count}</span>
        </div>
      </div>
    </div>
  );
}

export default PostIcons;

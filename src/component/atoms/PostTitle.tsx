import React from "react";
import './PostTitle.css'
interface IPostTitleProps{
    name: string,
    isPremium: boolean,
    userName: string,
    sharedTime: number
}
function PostTitle(props: IPostTitleProps) {
    const{name, isPremium, userName, sharedTime} = props
  return (
    <div>
      <div className="row">
        <div className="col align-items-center x-post-content">
            <span className="x-post-title-name">{name}</span>
            {
                isPremium &&
                <span className="x-post-title-check">
                <i className="fa-solid fa-circle-check" style={{ color: "#1da1f2" }} />
                </span>
            }
          <span className="x-post-title-user-name">@{userName}</span>
          <span className="x-post-title-point">.</span>
          <span className="x-post-title-date">{sharedTime}</span>
        </div>
      </div>
    </div>
  );
}

export default PostTitle;

import React from 'react'
import './Post.css'
import UserAvatar from '../atoms/UserAvatar'
import PostTitle from '../atoms/PostTitle'
import PostIcons from '../atoms/PostIcons'
interface IPostProps{
    userAvatar: string,
    userName: string,
    name: string,
    isPremium: boolean,
    sharedTime: number,
    userId: string,
    comment: string,
    postImageUrl: string,
    postId: string,
    commentCount: number,
    reTweetCount: number,
    likeCount: number,
    viewsCount: number
}
function Post(props: IPostProps) {
    const {userAvatar, userName, name, isPremium, sharedTime, userId, comment, postImageUrl, postId, commentCount, reTweetCount, likeCount, viewsCount} = props
  return (
    <div className="row x-post-body">
        <div className="col-2 text-end">
            <UserAvatar userAvatarUrl={userAvatar}/>
        </div>
        <div className="col-10">
            <div className="row">
                <PostTitle userName={userName} name={name} sharedTime={sharedTime} isPremium={isPremium}/>
                
            </div>
            <div className="row">
                <label className=' x-post-comment'>
                {comment}
                </label>
                
            </div>
            <div className="row">
                <img className='x-post-image' src={postImageUrl} alt="post photo" />
            </div>
            <div className="row">
                <div className="col-3">
                    <PostIcons type='Comment' count={commentCount} postId='1'/>
                </div>
                <div className="col-3">
                    <PostIcons type='Retweet' count={reTweetCount} postId='2'/>
                </div>
                <div className="col-3">
                    <PostIcons type='Like' count={likeCount} postId='3'/>
                </div>
                <div className="col-3">
                    <PostIcons type='Views' count={viewsCount} postId='4'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default React.memo(Post)
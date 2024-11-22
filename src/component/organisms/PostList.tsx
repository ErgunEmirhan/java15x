import React, { useEffect } from 'react'
import Post from '../molecules/Post'
import { XDispatch, XUserSelector } from '../../store'
import { useDispatch } from 'react-redux'
import { fetchGetAllPosts } from '../../store/feature/postSlice'
import { openStdin } from 'process'
import { IPostResponse } from '../../models/IPostResponse'

function PostList() {
  const postList = XUserSelector(state => state.post.postList)
  const dispatch = useDispatch<XDispatch>()
  useEffect(()=>{
    dispatch(fetchGetAllPosts());
  },[])
  return (
    <div className='col'>
    {
      postList.map((post: IPostResponse, index)=> {
        return <Post key={index} userAvatar={post.avatar}
        userId='1' userName={post.userName} name={post.name}
        isPremium={false} sharedTime={post.date} comment={post.comment} postImageUrl='https://picsum.photos/200/200' postId='4' commentCount={post.commentCount} reTweetCount={305} likeCount={post.likeCount} viewsCount={post.viewCount}
        />
      })
    }</div>
  )
}
export default PostList
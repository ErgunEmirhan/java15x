import React, { useState } from 'react'
import './SharePost.css'
import UserAvatar from '../atoms/UserAvatar'
import { useDispatch } from 'react-redux';
import { XDispatch } from '../../store';
import { INewPostRequest } from '../../models/INewPostRequest';
import swal from 'sweetalert';
import { fetchGetAllMyPosts, fetchGetAllPosts, fetchNewPost } from '../../store/feature/postSlice';
function SharePost() {
  const [comment, setComment] = useState('');
  const dispatch = useDispatch<XDispatch>();
  const createPost = ()=>{
    const token = localStorage.getItem('token')
    const post: INewPostRequest = {
      comment: comment,
      imageUrl: 'https://picsum.photos/100/100',
      token: token ? token : ''
    }
    dispatch(fetchNewPost(post)).then(data=>{
      swal('Başarılı', 'Yeni post başarıyla oluşturuldu', 'success')
      dispatch(fetchGetAllPosts())
    })
  }
  return (
    <div >
      <div className="row border mt-5 p-2">
        <div className="col-1 text-center mt-1">
          <UserAvatar userAvatarUrl='https://picsum.photos/100/100'/>
        </div>
        <div className="col-11">
          <div className="row">
          <textarea value={comment} onChange={evt=> setComment(evt.target.value)} className='x-new-post-comment' rows={5}placeholder='Neler oluyor?' ></textarea>
          
          </div>
          <div className="row">
            <hr className='x-new-post-bottom-line' />
          </div>
          <div className="row">
            <div className="col-8 align-items-center">
            <i className='fa-regular fa-image x-new-post-icons' style={{color: '#1da1f2'}}/>
            <i className='fa-solid fa-list-ul x-new-post-icons' style={{color: '#1da1f2'}}/>
            <i className='fa-regular fa-face-smile x-new-post-icons' style={{color: '#1da1f2'}}/>
            <i className='fa-regular fa-clock x-new-post-icons' style={{color: '#1da1f2'}}/>
            <i className='fa-solid fa-location-dot x-new-post-icons' style={{color: '#1da1f2'}}/>
            <i className='fa-solid fa-bold x-new-post-icons' style={{color: '#1da1f2'}}/>
            <i className='fa-solid fa-italic x-new-post-icons' style={{color: '#1da1f2'}}/>
            </div>
            <div className="col-4 text-end">
            <input onClick={createPost} type="button" value="Gönder" className='x-new-post-btn-send' />
             
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SharePost
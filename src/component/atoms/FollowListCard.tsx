import React from 'react'
import './FollowListCard.css'
interface IFollowListCardProps{
    userName: string,
    name: string,
    avatar: string,
    userId: string
}
function FollowListCard(props: IFollowListCardProps) {
    const {userId, userName, name, avatar} = props;
  return (
    <div>
        <div className="row align-items-center x-list">
            <div className="col-2">
                <img className='x-img-avatar' src={avatar} alt='kullanici resmi'/>
            </div>
            <div className="col-7">
                <div className="row align-items-bottom x-follow-text-name">
                    <label>{name}</label>
                </div>
                <div className="row align-items-top x-follow-text-user-name">
                    <label>@{userName}</label>
                </div>
            </div>
            <div className="col-3">
                <input className='x-btn-follow' type="button" value="Takip Et" />
            </div>
        </div>
    </div>
  )
}

export default FollowListCard
import React from 'react'
import './UserAvatar.css'
interface IUserAvatarProps{
    userAvatarUrl?: string
}
function UserAvatar(props: IUserAvatarProps) {
    const url = props.userAvatarUrl
  return (
    <>
        <img src={url} alt="profile photo" className='user-avatar' />
    </>
  )
}

export default React.memo(UserAvatar)
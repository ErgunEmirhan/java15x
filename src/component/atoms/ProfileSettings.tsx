import React from 'react'
import './ProfileSettings.css'
import { useDispatch } from 'react-redux'
import { XDispatch, XUserSelector } from '../../store'
import { userLogout } from '../../store/feature/authSlice'
function ProfileSettings() {
    const dispatch = useDispatch<XDispatch>()
    const profile = XUserSelector(state=>state.user.profile)
    const logout = async()=>{
        localStorage.removeItem('token')
        dispatch(userLogout())
    }
    console.log(profile)
  return (
    <div className="row align-items-center">
                <div className="col-2 ">
                    <img className='x-profile-setting-img' src={profile?.avatar} alt="x icon"  />
                </div>
                <div className="col-7">
                    <div className="row">
                        <label className='x-profile-setting-name' >{profile?.name}</label>
                        <label className='x-profile-setting-user-name'>@{profile?.userName}</label>
                    </div>
                    
                </div>
                <div className="col-3">
                <i  onClick={logout} className='fa-solid fa-arrow-right-from-bracket  x-profile-setting-btn' style={{color:'rgb(255,100,100)'}} />
                </div>
            </div>
  )
}

export default ProfileSettings
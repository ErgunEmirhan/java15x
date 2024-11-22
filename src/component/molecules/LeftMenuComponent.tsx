import React from 'react'
import LeftButtons from '../atoms/LeftButtons'
import ProfileSettings from '../atoms/ProfileSettings'

function LeftMenuComponent() {
  return (
    <div className="row justify-content-end mt-1">
        <div className="col-8 mt-1 mb-2">
            <ProfileSettings/>
        </div>
        <div className="col-7">
            <div className="row mb-2">
                <LeftButtons iconType='Home' name='Anasayfa' path='/home' isActive={true} />
            </div>
            <div className="row mb-2">
                <LeftButtons iconType='Search' name='Keşfet' path='/search'/>
            </div>
            <div className="row mb-2">
                <LeftButtons iconType='Notifications' name='Bildirimler' path='/notification'/>
            </div>
            <div className="row mb-2">
                <LeftButtons iconType='Lists' name='Listeler' path='/list'/>
            </div>
            <div className="row mb-2">
                <LeftButtons iconType='Locations' name='Konum' path='/location'/>
            </div>
            <div className="row mb-2">
                <LeftButtons iconType='Message' name='Mesajlar' path='/message'/>
            </div>
            <div className="row mb-2">
                <LeftButtons iconType='Profile' name='Profil' path='/profile'/>
            </div>
            <div className="row mb-2">
                <LeftButtons iconType='More' name='Daha fazla' path='/more'/>
            </div>
        </div>
    </div>
  )
}

export default LeftMenuComponent
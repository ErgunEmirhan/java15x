import React from 'react'
import './LeftButtons.css'
import { useNavigate } from 'react-router-dom'
interface ILeftButtonsProps{
  iconType: 'Home' | 'Search' | 'Notifications' | 'Message' | 'Profile'
  | 'Lists' | 'Locations' | 'More',
  name: string,
  path: string // hangi url adresine yönlendirilecek
  isActive?: boolean
}
function LeftButtons(props: ILeftButtonsProps) {
  const {iconType, name, path, isActive} = props
  const icons = ()=>{
    switch (iconType){
      case 'Home': return <i className='fa-solid fa-house' style={{color: '#1da1f2'}}></i>
      case 'Search': return <i className='fa-solid fa-magnifying-glass' style={{color: '#1da1f2'}} />
      case 'Notifications': return <i className='fa-solid fa-bell' style={{color: '#1da1f2'}} />
      case 'Profile': return <i className='fa-solid fa-user' style={{color: '#1da1f2'}} />
      case 'Message': return <i className='fa-solid fa-envelope' style={{color: '#1da1f2'}} />
      case 'Lists': return <i className='fa-solid fa-list' style={{color: '#1da1f2'}} />
      case 'Locations': return <i className='fa-solid fa-location' style={{color: '#1da1f2'}} />
      case 'More': return <i className='fa-solid fa-ellipsis-h' style={{color: '#1da1f2'}} />
      default: return <></>; 
    }
  }
  const navigate = useNavigate();
  const goToPath = () => {
    navigate(path);
  }
  const getStyleName = ()=>{
   return  isActive ? {fontWeight: 'bold', color: 'white'} : {color: 'white'}
  }
  return (
    <div className='row x-btn align-items-center' onClick={goToPath}>
      <div className="col-2">
          {
            icons()
          }
      </div>
      <div className="col-10">
          <span style={getStyleName()}>{name}</span>
      </div>
    </div>
  )
}

export default React.memo(LeftButtons)
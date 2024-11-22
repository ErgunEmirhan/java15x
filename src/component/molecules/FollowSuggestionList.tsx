import React from 'react'
import FollowListCard from '../atoms/FollowListCard'

function FollowSuggestionList() {
  return (
    <div>
        <div className="row">
            <h6 style={{color: 'white', marginTop: '10px', marginBottom: '10px',}} >Bunları beğenebilirsin</h6>
        </div>
        <div className="row">
            <FollowListCard userId='001' userName='muhammed' name='Muhammet Hoca' avatar='https://picsum.photos/150/150'/>
            <FollowListCard userId='001' userName='muhammed' name='Muhammet Hoca' avatar='https://picsum.photos/150/150'/>
            <FollowListCard userId='001' userName='muhammed' name='Muhammet Hoca' avatar='https://picsum.photos/150/150'/>
        </div>
        <div className="row">
            <span style={{color: '#1da1f2', fontSize: '12px'}}>Daha fazla gör</span>
        </div>
    </div>
  )
}

export default React.memo(FollowSuggestionList)
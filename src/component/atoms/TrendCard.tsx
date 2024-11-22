import React from 'react'
import './TrendCard.css'
function TrendCard() {
  return (
    <div>
      <div className="row x-list">
        <div className="col-9">
          <div className="align-items-center">
            <label className='x-trend-title'>Haberler</label>
            <label className='x-trend-title'> . </label>
            <label className='x-trend-title'> 2 saat önce </label>
          </div>
          <div className="row" style={{color: 'white'}}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste corporis tempore.
          </div>
        </div>
        <div className="col-3 align-content-center justify-content-center">
          <img className='x-trend-img' src="https://picsum.photos/100/100" alt="hbaber resimi" />
        </div>
      </div>
    </div>
  )
}

export default TrendCard
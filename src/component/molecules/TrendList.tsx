import React from 'react'
import TrendCard from '../atoms/TrendCard'

function TrendList() {
  return (
    <div>
        <div className="row">
            <h6 style={{color: 'white', marginTop: '10px', marginBottom: '10px',}} >İlginç haberler</h6>
        </div>
        <div className="row">
            <TrendCard/>
            <TrendCard/>
            <TrendCard/>
            <TrendCard/>
            <TrendCard/>
            <TrendCard/>
            <TrendCard/>
            <TrendCard/>
            <TrendCard/>
            <TrendCard/>
        </div>
        <div className="row">
            <span style={{color: '#1da1f2', fontSize: '12px'}}>Daha fazla gör</span>
        </div>
    </div>
  )
}

export default TrendList
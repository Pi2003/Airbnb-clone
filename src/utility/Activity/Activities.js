import React, { Component } from 'react'
import './Activity.css'
import Activity from './Activity'

export default class Activities extends Component {
  
  
    render() {
    const activities=this.props.activities.map((activity,i)=>{
        return(
            <div key={i} className="col s2">
                <Activity activity={activity}/>
            </div>
        )
    })
    return (
      <div className='activities'>
        <h1>{this.props.header}</h1>
        {activities}
      </div>
    )
  }
}

import React from 'react'

const TaskDiv = (props) => {
    
  return (
        <div className={`py-6 px-9 rounded-xl w-[45%] bg-${props.rang}-400`}>
            <h2 className='text-3xl font-semibold'>{props.number}</h2>
            <h3>{props.heading}</h3>
        </div>
  )
}

export default TaskDiv

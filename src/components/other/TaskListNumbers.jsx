import React from 'react'
import TaskDiv from './TaskDiv'

const TaskListNumbers = () => {
  return (
    <div className='flex mt-10 screen justify-between gap-5'>
        <TaskDiv rang='blue' number="0" heading="New Task"/>
        <TaskDiv rang="green" number="0" heading="Completed"/>
        <TaskDiv rang="yellow" number="1" heading="Accepted"/>
        <TaskDiv rang="red" number="0" heading="Failed"/>
    </div>
  )
}

export default TaskListNumbers

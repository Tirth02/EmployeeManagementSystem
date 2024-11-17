import React from 'react'
import TaskDiv from './TaskDiv'

const TaskListNumbers = ({data}) => {
  return (
    <div className='flex mt-10 screen justify-between gap-5'>
        <TaskDiv rang='blue' number={data.taskNumbers.active} heading="New Task"/>
        <TaskDiv rang="green" number={data.taskNumbers.newTask} heading="Completed"/>
        <TaskDiv rang="yellow" number={data.taskNumbers.completed} heading="Accepted"/>
        <TaskDiv rang="red" number={data.taskNumbers.failed} heading="Failed"/>
    </div>
  )
}

export default TaskListNumbers

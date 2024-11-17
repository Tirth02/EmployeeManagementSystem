import React from 'react'
import TaskListCard from '../other/TaskListCard'

const TaskList = ({data}) => {
  return (
    <div id='tasklist' className='h-[55%] overflow-x-auto w-full py-5 flex items-center justify-start gap-5 flex-nowrap mt-10'>
        <TaskListCard priority="high" cardColor="yellow" heading="Make a Youtube channel"/>
        <TaskListCard priority="medium" cardColor="red" heading="Make a Facebook channel"/>
        <TaskListCard priority="least" cardColor="blue" heading="Make a Ecommerce website"/>
        <TaskListCard priority="medium" cardColor="green" heading="Make a website documentation"/>
    </div>
  )
}

export default TaskList

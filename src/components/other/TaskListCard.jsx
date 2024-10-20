import React from 'react'

const TaskListCard = (props) => {
    const prioritylist = {
        high: "red-600",
        medium:"yellow-400",
        least:"green-600",
    }

    const bgcolor= prioritylist[props.priority];
  return (
    <div className={`flex-shrink-0 h-full w-[300px] p-5 bg-${props.cardColor}-400 rounded-xl`}>
            <div className="flex justify-between items-center">
                <h3 className={`bg-${bgcolor} text-sm px-3 py-1 rounded`}>{props.priority.charAt(0).toUpperCase()+props.priority.slice(1)}</h3>
                <h4 className='text-sm '>20 feb 2024</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>{props.heading}</h2>
            <p className='text-sm mt-2'>
                {props.description?props.description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore, quibusdam, rerum quaerat id sequi explicabo aspernatur dignissimos ex deleniti error tenetur a molestias nemo laudantium."}
            </p>
        </div>
  )
}

export default TaskListCard

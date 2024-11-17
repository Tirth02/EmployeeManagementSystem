import React from 'react'

const NewTask = (props) => {
    const prioritylist = {
        high: "red-600",
        medium:"yellow-400",
        least:"green-600",
    }

    const bgcolor= prioritylist[props.priority];
  return (
    <div className={`flex-shrink-0 h-full w-[300px] p-5 bg-${props.cardColor}-400 rounded-xl`}>
            <div className="flex justify-between items-center">
                <h3 className={`bg-${bgcolor} text-sm px-3 py-1 rounded`}>{props.data.category}</h3>
                <h4 className='text-sm '>{props.data.taskDate}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>{props.data.taskTitle}</h2>
            <p className='text-sm mt-2'>
                {props.data.taskDescription?props.data.taskDescription:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore, quibusdam, rerum quaerat id sequi explicabo aspernatur"}
            </p>
            <div className='mt-4'>
                <button>Accept Task</button>
            </div>
        </div>
  )
}

export default NewTask

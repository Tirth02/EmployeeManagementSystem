import React from 'react'

const CompleteTask = (props) => {
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
                {props.data.taskDescription?props.data.taskDescription:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore, quibusdam, rerum quaerat id sequi explicabo aspernatur dignissimos ex."}
            </p>
            <div className='mt-2'>
                <button className='w-full bg-green-500'>Complete</button>
            </div>
        </div>
  )
}

export default CompleteTask

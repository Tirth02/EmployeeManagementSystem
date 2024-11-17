import React from 'react'

const Header = ({data}) => {
  console.log("Data in header",data.firstName);
  return (
    <div className='flex items-end justify-between'>
        <h1 className='text-2xl font-medium'>Hello <br/><span className='text-3xl font-semibold'>{data.firstName} 👋</span></h1>
        <button className='bg-red-600 px-5 py-2 rounded-sm text-lg font-medium'>LogOut</button>
    </div>
  )
}

export default Header

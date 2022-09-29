import React from 'react'
import { UserIcon } from '@heroicons/react/24/solid'
import { ArrowLeftOnRectangleIcon } from '@heroicons/react/24/solid'

const Navbar = () => {
  return (
    <div className='2xl:w-full w-5/6 mx-auto 2xl:px-52 text-neutral-700'>
    <ul className='flex justify-between'>
      <div className='flex 2xl:gap-8 gap-3 items-center'>
      <li>
        <h1 className='2xl:text-4xl text-2xl font-bold hover:text-neutral-500 transition-all ease-in-out'>SafeMint</h1>
      </li>
      <li>
        <h1 className='hover:text-neutral-500 transition-all ease-in-out'>Collect</h1>
      </li>
      <li>
        <h1 className='hover:text-neutral-500 transition-all ease-in-out'>Create</h1>
      </li>
      </div>
      <div className='flex gap-4  items-center'>
      <li>
        <UserIcon className='h-6 w-6 self-end hover:text-neutral-500 transition-all ease-in-out'/>
      </li>
      <li>
        <ArrowLeftOnRectangleIcon className='h-6 w-6 self-end hover:text-neutral-500 transition-all ease-in-out'/>
      </li>
      </div>
    </ul>
    </div>
  )
}

export default Navbar


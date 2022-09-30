import type { NextPage } from 'next'
import Bayc from '../public/bayc.png'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from './components/Navbar'
import Bayc_Avi from '../public/bayc_avatar.png'
import { XCircleIcon } from '@heroicons/react/24/solid'
import AllowlistCard from './components/AllowlistCard'
import { useState, useEffect } from 'react'

const Home: NextPage = () => {

  const [showDescription, setShowDescription] = useState(false)

  useEffect(() => {
    console.log(showDescription, "changing state")
  }, [showDescription])
  


  return (
    <>
    <div className='bg-white w-full flex flex-col'>
    <Navbar />
    {/* BG Image */}
    <div className='w-[99vw] h-60 relative'>
    <Image src={Bayc} layout='fill' objectFit='cover' className='object-top' />
    </div>
    <div className="2xl:px-52 px-3">
    {/* Avatar */}
    <div className='w-32 h-32 relative mx-auto 2xl:mx-0 my-4 rounded-lg overflow-hidden 2xl:-top-12'>
    <Image src={Bayc_Avi} layout='fill' objectFit='contain'/>
    </div>
    {/* Page Content + Allowlist Card */}
    <section className='flex 2xl:justify-between 2xl:flex-row flex-col'>
    <div className='MAIN-CONTENT 2xl:w-3/5 bg-white'>
    {/* Main Content */}
    <div className='flex flex-col 2xl:flex-row mb-8'> 
    <h1 className='text-3xl font-bold text-center 2xl:text-left mr-1'>Bored Ape Yacht Club</h1>
    <div className='flex justify-center items-center'>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 fill-blue-500">
    <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 fill-green-500">
    <path fillRule="evenodd" d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 00.374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 00-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08zm3.094 8.016a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
    </svg>
    </div>
    </div>
    {/* Mint Info */}
    <div className='flex gap-8 mb-8 text-center justify-center 2xl:justify-start'>
    <div className='flex-col 2xl:contents'>
    <div>
    <h1 className='uppercase tracking-tight text-xs font-medium'>Mint Date</h1>
    <p className='2xl:text-lg font-bold'>May 1st</p>
    </div>
    <div>
    <h1 className='uppercase tracking-tight text-xs font-medium'>Mint Price</h1>
    <p className='2xl:text-lg font-bold flex items-center'>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mx-1">
    <path d="M10.75 10.818v2.614A3.13 3.13 0 0011.888 13c.482-.315.612-.648.612-.875 0-.227-.13-.56-.612-.875a3.13 3.13 0 00-1.138-.432zM8.33 8.62c.053.055.115.11.184.164.208.16.46.284.736.363V6.603a2.45 2.45 0 00-.35.13c-.14.065-.27.143-.386.233-.377.292-.514.627-.514.909 0 .184.058.39.202.592.037.051.08.102.128.152z" />
    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-6a.75.75 0 01.75.75v.316a3.78 3.78 0 011.653.713c.426.33.744.74.925 1.2a.75.75 0 01-1.395.55 1.35 1.35 0 00-.447-.563 2.187 2.187 0 00-.736-.363V9.3c.698.093 1.383.32 1.959.696.787.514 1.29 1.27 1.29 2.13 0 .86-.504 1.616-1.29 2.13-.576.377-1.261.603-1.96.696v.299a.75.75 0 11-1.5 0v-.3c-.697-.092-1.382-.318-1.958-.695-.482-.315-.857-.717-1.078-1.188a.75.75 0 111.359-.636c.08.173.245.376.54.569.313.205.706.353 1.138.432v-2.748a3.782 3.782 0 01-1.653-.713C6.9 9.433 6.5 8.681 6.5 7.875c0-.805.4-1.558 1.097-2.096a3.78 3.78 0 011.653-.713V4.75A.75.75 0 0110 4z" clipRule="evenodd" />
    </svg>

      .08
    </p>
    </div>
    </div>
    <div className='flex-col 2xl:contents'>
    <div>
    <h1 className='uppercase tracking-tight text-xs font-medium'>Max Supply</h1>
    <p className='2xl:text-lg font-bold'>10,000</p>
    </div>
    <div>
    <h1 className='uppercase tracking-tight text-xs font-medium'>Max Mint/Wallet</h1>
    <p className='2xl:text-lg font-bold'>50 NFTs</p>
    </div>
    </div>
    </div>
    {/* Buttons & Links */}
    <div className='flex flex-col 2xl:flex-row 2xl:gap-20 gap-8 mb-8 text-center'>
    <div className='uppercase tracking-tight text-center text-xs flex flex-col items-center'>
    <h1 className='uppercase tracking-tight text-xs font-medium flex mb-2'>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 mr-1">
    <path fillRule="evenodd" d="M19 10.5a8.5 8.5 0 11-17 0 8.5 8.5 0 0117 0zM8.25 9.75A.75.75 0 019 9h.253a1.75 1.75 0 011.709 2.13l-.46 2.066a.25.25 0 00.245.304H11a.75.75 0 010 1.5h-.253a1.75 1.75 0 01-1.709-2.13l.46-2.066a.25.25 0 00-.245-.304H9a.75.75 0 01-.75-.75zM10 7a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
    </svg>

      More Info
    </h1>
    <span className='text-white font-medium flex 2xl:flex-col justify-center gap-1'>
    <button className='bg-slate-700 hover:bg-slate-500 transition-all p-1 rounded flex justify-start'>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 mx-1">
    <path fillRule="evenodd" d="M6.28 5.22a.75.75 0 010 1.06L2.56 10l3.72 3.72a.75.75 0 01-1.06 1.06L.97 10.53a.75.75 0 010-1.06l4.25-4.25a.75.75 0 011.06 0zm7.44 0a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06L17.44 10l-3.72-3.72a.75.75 0 010-1.06zM11.377 2.011a.75.75 0 01.612.867l-2.5 14.5a.75.75 0 01-1.478-.255l2.5-14.5a.75.75 0 01.866-.612z" clipRule="evenodd" />
    </svg>
    <h1 className='mx-auto'>Source Code</h1>
    </button>
    <button className='bg-sky-500 hover:bg-sky-300 transition-all p-1 rounded flex justify-start'>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 mx-1">
    <path fillRule="evenodd" d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
    </svg>
      <h1 className='mx-auto'>Doxed Team</h1>
    </button>
    <button className='bg-green-500 hover:bg-green-300 transition-all p-1 rounded flex justify-around'>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 mx-1">
    <path fillRule="evenodd" d="M9.661 2.237a.531.531 0 01.678 0 11.947 11.947 0 007.078 2.749.5.5 0 01.479.425c.069.52.104 1.05.104 1.59 0 5.162-3.26 9.563-7.834 11.256a.48.48 0 01-.332 0C5.26 16.564 2 12.163 2 7c0-.538.035-1.069.104-1.589a.5.5 0 01.48-.425 11.947 11.947 0 007.077-2.75zm4.196 5.954a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
    </svg>

    <h1 className='mx-auto'>Smart Contract Audit</h1>
    </button>
    </span>
    </div>
    <div className='flex flex-col items-center'>
      <h1 className='uppercase tracking-tight text-xs font-medium flex'>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 mr-1">
      <path d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z" />
      <path d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z" />
      </svg>

        Official Link
      </h1>
      <h1 className='text-blue-600 underline font-medium hover:text-blue-300 transition-all'>
        www.bayc.com
      </h1>
    </div>
    </div>
    {/* Description */}
    <div className='bg-neutral-100 w-5/6 mx-auto 2xl:mx-0 rounded-xl p-3 mb-8 text-center 2xl:text-left'>
    <button onClick={() => setShowDescription(!showDescription)}><h1 className='font-bold text-lg mb-3'>Description</h1>
    {showDescription ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-7 mx-auto h-7 animate-pulse 2xl:hidden">
    <path fillRule="evenodd" d="M14.77 12.79a.75.75 0 01-1.06-.02L10 8.832 6.29 12.77a.75.75 0 11-1.08-1.04l4.25-4.5a.75.75 0 011.08 0l4.25 4.5a.75.75 0 01-.02 1.06z" clipRule="evenodd" />
    </svg>
    : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-7 h-7 mx-auto animate-pulse 2xl:hidden">
    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
    </svg>}
    </button>
    <h1 className={showDescription ? "text-slate-700 2xl:block 2xl:text-left" : "text-slate-700 hidden 2xl:block 2xl:text-left"}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    </h1>
    </div>
    </div>
    <AllowlistCard />
    </section>
    </div>
    <footer className='bg-stone-800 2xl:mt-auto text-neutral-200 text-xs font-semibold'>
      <div className='w-5/6 2xl:px-52 mx-auto 2xl:mx-0 my-1'>
      <h1>2022 C SafeMint.com</h1>
      <p>This website is owned and operated by 25K Labs, Inc.</p>
      </div>
      

    </footer>
    </div>
    
    </>
  )
}

export default Home

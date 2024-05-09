
import { useLoaderData } from 'react-router-dom';
import { CiStar } from 'react-icons/ci';
import { useEffect, useState } from 'react';

const ArtCraftDetails = () => {
  
  const artCraft = useLoaderData();

const { image, itemName, subcategoryName, shortDescription, price, rating, customization, processingTime, stockStatus} = artCraft

  return (
    <div className='max-w-4xl mx-auto'>
      <div className='flex flex-col lg:flex-row  lg:justify-between bg-gray-50 rounded-md p-10'>
        <div className='space-y-6 lg:space-y-3 lg:w-[70%]'>
          
          <p className='font-bold'>{itemName}</p>
          <p>{shortDescription}</p>

          <div className='flex items-center'>
          <CiStar/>
      <p className='text-sm  p-1 text-black  me-2'>{rating}</p>
          </div>
          <div className='mb-2 flex flex-col lg:flex-row'>
            <ul className=' '>
              <li><span className='font-bold'>Customization:</span> {customization}</li>
            </ul>
          </div>
        </div>

        <div className='space-y-6 lg:space-y-3'>
          <p>$ <span className='text-[#23BE0A] font-bold'>{price}</span> </p>
          <p className=' text-black  me-2'><span className='font-bold'>Stock Status:</span> {stockStatus}</p>
          <p><span className='font-bold'>Time: </span>{processingTime} days  </p>
          <p>#{subcategoryName}</p>
        </div>
      </div>
      <div>
        <img src={image} alt="" className='lg:w-full w-[90%] mx-auto'/>
      </div>
    </div>
  )
}

export default ArtCraftDetails
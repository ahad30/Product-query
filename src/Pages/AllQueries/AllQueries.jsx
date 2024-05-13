import React, { useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom';
import moment from 'moment';
import { BsFillGridFill } from "react-icons/bs";
import { BsFillGrid3X2GapFill } from "react-icons/bs";

const AllQueries = () => {
const loadedItems = useLoaderData();
const [allQueries , setallQueries] = useState(loadedItems);
const [layout, setLayout] = useState('3-column');

const handleLayoutChange = (newLayout) => {
  setLayout(newLayout);
};
  return (
<section className='max-w-6xl mx-auto'>
    <h1 className='text-center font-bold text-xl mb-3'>All Queries</h1>
    <div className='flex justify-center items-center gap-3 mb-5'>
    <button onClick={() => handleLayoutChange('3-column')}><BsFillGrid3X2GapFill className='text-lg'/></button>
    <button onClick={() => handleLayoutChange('2-column')} ><BsFillGridFill/></button>
    </div>


{layout === '3-column' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
{
    allQueries.map(item => 
    <div className=''>
   <div className="max-w-2xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
    <img className="object-cover w-full h-64" src={item?.image} alt="Product"/>

    <div className="p-6">
        <div>
       <div className='flex justify-between'>
       <p className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">{item?.itemName}</p>
       <p className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">
       #{item?.brandName}</p>
       </div>
            <a href="#" className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline"  role="link">{item?.queryTitle}</a>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            
            {item?.shortDescription}
            </p>
        </div>

        <div className="mt-4">
           
                <div className="flex items-center">
                    <img className="object-cover h-10 rounded-full" src={item?.posterInfo?.photo} alt="Avatar"/>
                  <div>
                  <a href="#" className="mx-2 font-semibold text-gray-700 dark:text-gray-200" role="link">{item?.posterInfo?.userName}</a>
                    <p className="mx-1 text-xs text-gray-600 dark:text-gray-300">
                    {moment(item?.deadline).format('MMMM Do YYYY, h:mm:ss a')}
                    </p>
                  </div>
                </div>
               <div className='flex justify-between items-center mt-4'>
               <div>
                <p className='font-bold'>Comment: {item?.recommendation_count}</p>
               </div>
               <Link to= {`/queryDetails/${item?._id}`}>
                    <button className='text-sm bg-[#23BE0A] p-2 text-white rounded-md'> Recommend</button>
                </Link>
               </div>
               
            
        </div>
    </div>
</div>
    </div>)
     }
        </div>
      )}
      
      
    {layout === '2-column' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {
            allQueries.map(item => 
    <div className=''>
   <div className="max-w-2xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
    <img className="object-cover w-full h-64" src={item?.image} alt="Product"/>

    <div className="p-6">
        <div>
       <div className='flex justify-between'>
       <p className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">{item?.itemName}</p>
       <p className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">
       #{item?.brandName}</p>
       </div>
            <a href="#" className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline"  role="link">{item?.queryTitle}</a>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            
            {item?.shortDescription}
            </p>
        </div>

        <div className="mt-4">
            <div className="flex items-center">
                <div className="flex items-center">
                    <img className="object-cover h-10 rounded-full" src={item?.posterInfo?.photo} alt="Avatar"/>
                  <div>
                  <a href="#" className="mx-2 font-semibold text-gray-700 dark:text-gray-200" role="link">{item?.posterInfo?.userName}</a>
                    <p className="mx-1 text-xs text-gray-600 dark:text-gray-300">
                    {moment(item?.deadline).format('MMMM Do YYYY, h:mm:ss a')}
                    </p>
                  </div>
                </div>
               
            </div>
        </div>
    </div>
</div>
    </div>)
          }
        </div>
      )}
    
    </section>
  )
}

export default AllQueries;
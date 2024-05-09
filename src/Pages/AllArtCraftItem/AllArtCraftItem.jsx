import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLoaderData } from "react-router-dom"


const AllArtCraftItem = () => {
 
const loadedItems = useLoaderData();
const [allArtItems , setAllArtItems] = useState(loadedItems);
// const { _id ,  itemName, subcategoryName, price, rating , userName} = allArtItems

// console.log(loadedItems);
  return (

<div className="overflow-x-auto max-w-4xl mx-auto">
<Helmet>
        <title>Art & Craft | All Item</title>
      </Helmet>
  <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm border-2">
    <thead className="">
      <tr className="">
        <th className="text-center px-4 font-bold py-2  text-gray-900"></th>
        <th className="text-center px-4 font-bold py-2  text-gray-900">User</th>
        <th className="text-center px-4 font-bold py-2  text-gray-900">Item</th>
        <th className="text-center px-4 font-bold py-2  text-gray-900">Subcategory</th>
        <th className="text-center px-4 font-bold py-2  text-gray-900">Price</th>
        <th className="text-center px-4 font-bold py-2  text-gray-900">Rating</th>
      </tr>
    </thead>

    <tbody className="divide-y divide-gray-200">
      
      {allArtItems?.map((allArtItem , idx) => (  
      <tr key={allArtItem?.id} className='' >
        <td className="text-center px-4 py-2 font-medium text-gray-900">
        {idx+1}
        </td>
        <td className="text-center  px-4 py-2 text-gray-700">
        {allArtItem.userName}
        </td>
        <td className="text-center px-4 py-2 text-gray-700">
        {allArtItem.itemName}
        </td>
        <td className="text-center px-4 py-2 text-gray-700">
        {allArtItem.subcategoryName}
        </td>
        <td className="text-center px-4 py-2 text-gray-700">{allArtItem.price}</td>
        <td className="text-center px-4 py-2 text-gray-700">{allArtItem.rating}</td>

        <td className="text-center px-4 py-2">
      
        <Link to= {`/artCraftDetails/${allArtItem?._id}`}>
                    <button className='text-sm bg-[#23BE0A] p-2 text-white rounded-md'>View Details</button>
        </Link>
        
        </td>
      </tr>
))}
    </tbody>
  </table>
</div>
  )
}

export default AllArtCraftItem










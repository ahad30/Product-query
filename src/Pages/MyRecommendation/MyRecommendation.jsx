import React from 'react'

const MyRecommendation = () => {
  return (
    <section className='container px-4 mx-auto pt-12'>
    <div className='flex items-center gap-x-3'>
      <h2 className='text-lg font-medium text-gray-800 '>My Recommendation</h2>

      <span className='px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full '>
        {/* {bids.length} Bid */}
      </span>
    </div>

    <div className='flex flex-col mt-6'>
      <div className='-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
        <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
          <div className='overflow-hidden border border-gray-200  md:rounded-lg'>
            <table className='min-w-full divide-y divide-gray-200'>
              <thead className='bg-gray-50'>
                <tr>
                  <th
                    scope='col'
                    className='py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500'
                  >
                    <div className='flex items-center gap-x-3'>
                      <span>Date</span>
                    </div>
                  </th>

                  <th
                    scope='col'
                    className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                  >
                    <span>Product Name</span>
                  </th>

                  <th
                    scope='col'
                    className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                  >
                    <button className='flex items-center gap-x-2'>
                      <span>Email</span>
                    </button>
                  </th>

                  <th
                    scope='col'
                    className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                  >
                    Title
                  </th>

                  <th
                    scope='col'
                    className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                  >
             Reason
                  </th>

                </tr>
              </thead>
              <tbody className='bg-white divide-y divide-gray-200 '>
           
                  <tr>
                    <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                 
                    </td>

                    <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                 
                    </td>

                    <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                    
                    </td>
                    <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                    
                    </td>
                    <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                    
                    </td>
                  
                  
                  
                  </tr>
             
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default MyRecommendation
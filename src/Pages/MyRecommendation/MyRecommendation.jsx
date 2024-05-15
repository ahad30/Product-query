import { useContext, useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { MdEdit, MdDelete } from 'react-icons/md';
import Swal from 'sweetalert2';
import moment from 'moment';
import axios from 'axios';
import { AuthContext } from '../../Providers/AuthProvider';




const MyRecommendation = () => {

  const { user } = useContext(AuthContext);
  const [items, setItems] = useState([]);

  useEffect(() => {
    
    axios.get(`${import.meta.env.VITE_API_URL}/mySingleQuery/${user?.email}` , {
      withCredentials: true,
    })
      .then((data) => {
        setItems(data?.data);
        console.log(data?.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  // const handleDelete = (_id) => {
  //   console.log(_id);
  //   Swal.fire({
  //     title: 'Are you sure?',
  //     text: "You won't be able to revert this!",
  //     icon: 'warning',
  //     showCancelButton: true,
  //     confirmButtonColor: '#3085d6',
  //     cancelButtonColor: '#d33',
  //     confirmButtonText: 'Yes, delete it!'
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       fetch(`${import.meta.env.VITE_API_URL}/deleteQueryItem/${_id}`, {
  //         method: 'DELETE'
  //       })
  //         .then((res) => res.json())
  //         .then((data) => {
  //           console.log(data);
  //           if (data.deletedCount > 0) {
  //             Swal.fire('Deleted!', 'Your Coffee has been deleted.', 'success');
  //             const remaining = items.filter((item) => item._id !== _id);
  //             setItems(remaining);
  //           }
  //         });
  //     }
  //   });
  // };




  return (
    <section className='max-w-6xl px-4 mx-auto pt-12'>
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
              <tbody className='bg-white divide-y divide-gray-200'>
                  {items?.map(item => (
                    <tr key={item._id}>
                    <td>{item?.brandName}</td>
                   {
                    item?.recommended.map(comment => {
                      <>
                         <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                        {comment.recommendProductName}
                      </td>

                      <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                        {/* {new Date(bid.deadline).toLocaleDateString()} */}
                      </td>

                      <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                        {comment.title}
                      </td>
                      <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                        5
                      </td>
                      </>


                    })
                   }
                    
                
                    </tr>
                  ))}
                </tbody>
            </table>
         <div>
         {
                    items?.map(comment => {

                    <>
                    
                    <div>
                      {
                        comment.recommended.map(comments =>{
                          <p>{comments.recommendProductName}</p>
                        })
                      }
                    </div>
                    
                    
                    </>


                    })
                    
            }
         </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default MyRecommendation
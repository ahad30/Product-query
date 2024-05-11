import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { CiStar } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import { MdEdit, MdDelete } from 'react-icons/md';
import Swal from 'sweetalert2';
import moment from 'moment';

const MyQueryList = () => {
  const { user } = useContext(AuthContext);
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/mySingleQuery/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        console.log(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://b9a10-server-side-ahad30.vercel.app/deleteItem/${_id}`, {
          method: 'DELETE'
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire('Deleted!', 'Your Coffee has been deleted.', 'success');
              const remaining = items.filter((item) => item._id !== _id);
              setItems(remaining);
            }
          });
      }
    });
  };



  return (
    <div className='mb-5'>
      <h1 className='text-center text-3xl font-bold mt-5 mb-5'>My Query Items</h1>

      {/* const newQueryItem = {
      image,
      itemName,
      brandName,
      queryTitle,
      shortDescription,
      deadline,
      posterInfo: {
        userEmail,
        userName,
        photo
      },
      recommendation_count: 0,
    }; */}


      { items.length === 0 ? (
        <p className='text-center text-red-400 font-bold'>No data found.</p>
      ) : (
        <div className='w-[98%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {items.map((item) => (
            <div key={item._id}>
              <div className='overflow-hidden rounded-3xl shadow transition hover:shadow-lg'>
                <div className=''>
                  <img
                    alt=''
                    src={item?.image}
                    className='w-[400px] h-[314px] p-10 animate__animated animate__heartBeat'
                  />
                </div>
                <div className='bg-white space-y-3 p-4 sm:p-6'>

                  <h1 className='font-bold text-lg'>{item?.itemName}</h1>
                  <p>{moment(item?.deadline).format('MMMM Do YYYY, h:mm:ss a')}</p>
                  <h1 className='font-bold text-base'>{item?.queryTitle}</h1>
                  {/* <div className=''>
                  
                    <p className=' font-medium'>
                    {item?.shortDescription}
                    </p>                  
                    
                 
                  </div> */}
                  <div className='flex items-center justify-between gap-4 text-[#878787] mb-3'>
                    <div>
                      <p className='text-sm text-[#23BE0A]'>#{item?.brandName}</p>
                    </div>        
                    <div className='flex items-center gap-x-3'>
                      <Link to={`/updateItem/${item?._id}`}>
                        <button>
                          <MdEdit />
                        </button>
                      </Link>
                      <div>
                        <button onClick={() => handleDelete(item?._id)}>
                          <MdDelete />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyQueryList;

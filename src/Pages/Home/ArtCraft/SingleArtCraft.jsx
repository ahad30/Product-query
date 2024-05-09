import 'animate.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import { CiStar } from "react-icons/ci";

const SingleArtCraft = ({artCraftItem}) => {
// console.log(artCraftItem)
const { _id , image, itemName, subcategoryName, price, rating} = artCraftItem

  return (

    <div className=''>
    <div  className="overflow-hidden rounded-3xl shadow transition hover:shadow-lg">
    <div className=''>
    <img
        alt=""
        src={image}
        className=" w-[400px] h-[314px] p-10 animate__animated animate__heartBeat"
      />
    
    </div>
      <div className="bg-white space-y-3 p-4 sm:p-6">
    
      <h1 className='font-bold'>{itemName}</h1>
      <div className='flex items-center justify-between'>
     
      <p>$ <span className='text-[#23BE0A] font-bold'>{price}</span> </p>
     <div className='flex items-center space-x-1'>
     <CiStar/>
      <p className='text-sm  p-1 text-black  me-2'>{rating}</p>
     </div>
      </div>
    
        <div className='flex items-center justify-between gap-4 text-[#878787] mb-3'>
            <div className='flex items-center  gap-2'>
              <p className='text-sm'>#{subcategoryName}</p>
            </div>
            <div className='flex items-center gap-1'>
            <Link to= {`/artCraftDetails/${_id}`}>
              <button className='text-sm bg-[#23BE0A] p-2 text-white rounded-md'>View Details</button>
            </Link>
            </div>        
        </div>
    
      </div>
    </div>
    </div>

  )
}


SingleArtCraft.propTypes = {
  artCraftItem: PropTypes.object.isRequired
}

export default SingleArtCraft;
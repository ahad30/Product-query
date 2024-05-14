import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


const AllRecommend = ({}) => {
const id = useParams();
const [recommendData , setRecommendData] =  useState([])

useEffect(() => {
    
    axios.get(`${import.meta.env.VITE_API_URL}/queryDetails/${id}`)
    .then(data => {
        console.log(data?.data)
        setRecommendData(data?.data)
    })
}, [])


  return (
    <div>
      {/* {recommendData?.map(ahad=> 
        <div>
          {
           ahad?.recommended?.map(ahad10 => 
            <p>{ahad10.recommendProductName}</p>
           )
          }
        </div>
      )} */}
    </div>
  )
}

export default AllRecommend
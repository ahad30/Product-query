import axios from 'axios'
import React, { useEffect, useState } from 'react'

const AllRecommend = () => {
  
const [recommendData , setRecommendData] =  useState([])

useEffect(() => {
    
    axios.get(`${import.meta.env.VITE_API_URL}/getSingleQuery`)
    .then(data => {
        console.log(data?.data)
        setRecommendData(data?.data)
    })
}, [])


  return (
    <div>
      {recommendData?.map(ahad=> 
        <div>
          {
           ahad?.recommended?.map(ahad10 => 
            <p>{ahad10.recommendProductName}</p>
           )

          }
        </div>
      )}
    </div>
  )
}

export default AllRecommend
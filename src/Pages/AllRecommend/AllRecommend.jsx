import axios from 'axios'
import React, { useEffect, useState } from 'react'

const AllRecommend = () => {
  
const [recommadData , setRecommendData] =  useState([])

useEffect(() => {
    
    axios.get(`${import.meta.env.VITE_API_URL}/recommendQuery`)
    .then(data => {
        console.log(data?.data)
        setRecommendData(data?.data)
    })
}, [])



  return (
    <div>{
        recommadData.map(item=> 
        <div>
            {item?.recommendProductName} {item?.currentProductName}

        </div>
        )
    }</div>
  )
}

export default AllRecommend
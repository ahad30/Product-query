


const AllRecommend = ({recommended}) => {
// const id = useParams();
// const [recommendData , setRecommendData] =  useState([])
console.log(recommended);


  return (
    <div>
      {recommended?.map(ahad=> 
        <div key={ahad?._id}>
          
      
            <p>{ahad.recommendProductName}</p>
      
          
        </div>
      )}
    </div>
  )
}

export default AllRecommend
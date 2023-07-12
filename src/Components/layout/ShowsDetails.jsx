import { useContext, useEffect } from "react"
import movieDbContext from "../../Context/MovieDbContext"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"



function ShowsDetails() {

   const {seriesDetails,getSingleTVDetails} = useContext(movieDbContext)
   const {first_air_date, last_air_date, homepage, overview, backdrop_path, vote_average, poster_path} = seriesDetails
   const params = useParams();  
   useEffect(()=>{
    getSingleTVDetails(params.series_id)

   },[params.series_id])
  return (
     <>
     <Link to='/shows'>
     <button className="p-2 ml-2 bg-black text-white mt-2 rounded-lg capitalize"><svg className="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13"/>
</svg></button>
     </Link>
    
    
     <div className="w-full min-h-screen flex flex-col items-center">

     <div className="bg-white mx-auto max-w-[80%] flex flex-col space-y-2 md:flex-row md:space-x-3 mt-6">
      <div className="">
       <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="" className=" w-full h-full md:h-[400px] md:w-[500px]" />
      </div>      
      <div className="px-2 space-y-2">
        <p className="">{overview}</p>
        <Link to={homepage}>
          <button className="p-3 bg-black text-white mt-2 rounded-lg capitalize">Visit HomePage</button>
        </Link> 
        <p className="">first_air_date: {first_air_date}</p>
        <p className="">last_air_date: {last_air_date}</p>
        <p>{typeof vote_average === 'number' ? vote_average.toFixed(1) : vote_average }/10</p>
        

      </div>

     </div>
      
     </div>
    
   


    </>
  )
}
export default ShowsDetails
import { useLocation } from "react-router-dom"
import movieDbContext from "../../Context/MovieDbContext"
import { useContext} from "react"

function SearchResults() {

   const location = useLocation()
   const searchQuery = new URLSearchParams(location.search).get('query')
   const {searchList} = useContext(movieDbContext)
   
  return (
    <div>
      {searchList.map((items) => {
        return (
          <div key={items.id} className=" w-64 rounded-xl shadow-2xl h-96 ">
           {items.poster_path ? <img src={`https://image.tmdb.org/t/p/w500/${items.poster_path}`} alt="" className="max-h-[82%] w-full " /> 
              :
               <img src="https://www.shutterstock.com/image-vector/doodle-stick-figure-no-search-600w-1595649697.jpg" alt="" className="max-h-[82%] w-full h-full"  />  }

            <p>{items.title}</p>
            <p>{items.vote_average}/10</p>
          </div>
        );
      })
      
      }
    </div>
  )
}
export default SearchResults
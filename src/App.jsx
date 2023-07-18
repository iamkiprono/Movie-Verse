import Header from "./Components/layout/Header"
import Movies from "./Components/layout/Movies"
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"
import Shows from "./Components/layout/Shows"
import Home from "./Components/layout/Home"
import MovieDetails from "./Components/layout/MovieDetails"
import ShowsDetails from "./Components/layout/ShowsDetails"
import { MovieDbProvider } from "./Context/MovieDbContext"
import SearchResults from "./Components/Display/SearchResults"



function App() {

  
  return (
    
   <MovieDbProvider>
    <Router>      
    <Header/>
   
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/movies" element={<Movies/>}/>
      <Route path="/shows" element={<Shows/>}/>          
      <Route path="/movieDetails/:movie_id" element={<MovieDetails/>}/>
      <Route path="/showsDetails/:series_id" element={<ShowsDetails/>}/>  
      <Route path="/searchResults" element={<SearchResults/>}/>

    </Routes>
    </Router>
   </MovieDbProvider>
    
   
  )
}
export default App

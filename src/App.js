import "./App.css";
import Assets from "./assets/Assets";
import BusinessList from "./components/BusinessList";
import SearchBar from "./components/SearchBar";
import {  useState } from "react";


function App() {
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [searchValue2, setSearchValue2] = useState("");
  const getMovieRequest = async (term,location) => {
    const url = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=best_match&locale=tr_TR`;
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_YELP_API_KEY_APP}`,
      },
    });
    const responseJson = await response.json();
    if (responseJson.businesses) {
      setData(responseJson.businesses);
    }
    
  };
  const handleSubmit = (e) => { 
    e.preventDefault()
    getMovieRequest(searchValue,searchValue2)
  }
  
  /*
    useEffect(() => {
      getMovieRequest(searchValue);
    }, []);
    sürekli istek atma işlemi olmayacak
  */
    document.body.style.backgroundColor = "#b1b1b1";
  return (
    <div>
      <div>
        <Assets />
      </div>
      <div>
        <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} submit={handleSubmit} searchValue2={searchValue2} setSearchValue2={setSearchValue2}/>
      </div>
      <div>
        <BusinessList termData={data} />
      </div>
    </div>
  );
}

export default App;

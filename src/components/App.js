import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([])
  const [filteredListings, setFilteredListings] = useState(listings)

  useEffect(() => {
    fetch ('http://localhost:6001/listings')
    .then(response => response.json())
    .then(itemArray => setListings(itemArray))
}, [])

function handleDelete(id){
  const updatedItemArray = listings.filter((item)=> item.id !== id)
  setListings(updatedItemArray)
  }

function handleSearch(event){
  const filteredListings = listings.filter(listing => {
    return listing.description.includes(event.target.value)})
    
    setFilteredListings(filteredListings)
  
}

  return (
    <div className="app">
      <Header handleSearch={handleSearch}/>
      <ListingsContainer listings={filteredListings} handleDelete={handleDelete}/>
    </div>
  );
}

export default App;

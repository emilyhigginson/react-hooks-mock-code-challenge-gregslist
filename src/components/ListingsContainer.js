import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listings, handleDelete}) {
  const listingItem = listings.map((item)=>
   <ListingCard
    key = {item.id}
    id = {item.id}
    description = {item.description}
    image= {item.image}
    location ={item.location}
    handleDelete = {handleDelete}
    /> )
  return (
    <main>
      <ul className="cards">
       {listingItem}
      </ul>
    </main>
  );
}

export default ListingsContainer;

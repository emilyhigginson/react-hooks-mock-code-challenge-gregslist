import React, {useState} from "react";

function ListingCard({id, image, description, location, handleDelete}) {
const [favorite, setFavorite] = useState(false)

function favoriteItem() {
  setFavorite(!favorite)
}

function deleteFromDB(){
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE"
    })
    .then(response => response.json())
    .then(()=> handleDelete(id))
}

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div onClick ={favoriteItem} className="details">
        {favorite ? (
          <button  className="emoji-button favorite active">★</button>
        ) : (
          <button className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick ={deleteFromDB} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;

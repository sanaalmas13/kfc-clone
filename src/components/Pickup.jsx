import "./Pickup.css";
import stores from "../data/stores";
import { useState } from "react";
import DirectionsIcon from '@mui/icons-material/Directions';

function Pickup({open, closePopup}){

  const [search, setSearch] = useState("");


  if(!open) return null;

 const filteredStores = stores.filter((store)=>
 store.name.toLowerCase().includes(search.toLowerCase())||
 store.address.toLowerCase().includes(search.toLowerCase())
);

    return(
      <div className="pickup-overlay">
        <div className="pickup-top">
         <div className="kfc-stripes">
            <span></span>
            <span></span>
            <span></span>
         </div>
         
         <h3>Pickup Your Order</h3>
         <button onClick={closePopup}
        className="close-btn2">X</button>

         <hr />
        <div className="search-box">
     <input
     type="text"
     placeholder="Search"
     value={search}
     onChange={(e)=>setSearch(e.target.value)}
     />
    </div> 
     <div className="store-list">

      {filteredStores.length > 0 ? (filteredStores.map((store) => (
          <div className="store-card" key={store.id}>
            <h3>{store.name}</h3>
            <p>{store.address}</p>
            <h4>{store.timing}</h4>

            <button className="d-btn"
            onClick={()=>{
             window.open(
            `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(store.address)}`,
            "_blank"
            );
          }}
            >GET DIRECTION <DirectionsIcon
             sx={{fontSize:"12px"}}
            /></button>

            <hr/>

          </div>
        ))) : (
          <h3>No store found</h3>
        )}
        
        
        </div> 
        </div>
       
     
    
        
         
      </div>
    )
}

export default Pickup
import "./Header.css";
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import logo from "../assets/logo.png";
import delivery from "../assets/delivery.png";
import pickup from "../assets/pickup.png";
import merch from "../assets/merch.png";
import { useState } from "react";
import MenuDrawer from "./MenuDrawer";
import Pickup from "./Pickup";


function Header({setLogin}) {
 
const [open, setOpen] = useState(false);
const [pickupOpen, setPickupOpen] = useState(false);


  return (
    <header className="header">
      <div className="logo">
        <MenuOpenIcon
        onClick={()=>setOpen(true)}
        
        
        /> 
        <img src={logo}/>
      </div>

     <MenuDrawer
      open={open}
      closeDrawer={()=>setOpen(false)}
     
     />
     <Pickup
       open={pickupOpen}
       closePopup={()=>setPickupOpen(false)}
     />
    

      <div className="header-left">
        <button className="btn-1">
          <img src={delivery} />
          <span className="text">DELIVERY</span>
        </button>
         <button className="btn"
         onClick={()=>setPickupOpen(true)}
         >
          <img src={pickup} />
          <span className="text">PICKUP</span>
        </button>
         <button className="btn">
          <img src={merch} />
          <span className="text">MERCH</span>
        </button>
        
      </div>
      <div className="header-right">
        <button className="btn-3"><ShoppingCartCheckoutIcon sx={{fontSize:"30px"}}/> </button>
        <button 
        className="btn-4"
        onClick={()=>setLogin(true)}
       >
       LOGIN
      </button>
      </div>
      
    </header>
  );
}

export default Header;
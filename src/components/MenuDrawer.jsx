import { dividerClasses } from "@mui/material";
import "./MenuDrawer.css";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
// import { Link } from "react-router-dom";
import PlaceIcon from "@mui/icons-material/Place";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";
import MenuBookIcon from "@mui/icons-material/MenuBook";



function MenuDrawer({open, closeDrawer}){

   const { isDark, setIsDark } = useContext(ThemeContext);
   const handleClose = () => closeDrawer();

    return(
    <>
    {open && 
     <div className="overlay"
      onClick={closeDrawer}
     >
     </div>
    }
    <div className={open ? "drawer active" : "drawer"}>
     <div className="top">
        <button className="btn-4">Login</button>
    </div>
    <div className="mode">
     <div className="toggle">
       <div className="slider"
        style={{ left: isDark ? "50%" : "0%" }}
       ></div>

       <button 
       className={!isDark ? "day active" : "day"} 
       onClick={()=> setIsDark(false)}
       >Day</button>
       <button 
       className={isDark ? "night active" : "night"}
        onClick={()=> setIsDark(true)}
       >Night</button>
      </div>
    </div>
    <hr/>


    </div>

   
    
    
    
    
    </>
    )
}

export default MenuDrawer
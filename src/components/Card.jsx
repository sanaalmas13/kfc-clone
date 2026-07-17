import "./Card.css";
import AddIcon from "@mui/icons-material/Add";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

function Card({ title, dealName, price, img, onAdd, onOpen }) {
  return (
    <div className="Card">

      <div className="card-container">

        <FavoriteBorderIcon className="heart"/>

        <div className="img-box">
          <img src={img} alt={title} onClick={onOpen}/>
        </div>

        <h4>{dealName}</h4>

        <p>{title}</p>

        <h5>Rs.{price}</h5>

        <button onClick={onAdd} className="add-btn">
          <AddIcon />
          Add to Bucket
        </button>

      </div>
      

    </div>
    
  );
}

export default Card;
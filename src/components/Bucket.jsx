import "./Bucket.css";
import meal from "../assets/kfc-meal.png";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function Bucket({cart, removeFromCart}){
   
    const totalItems = cart.reduce(
        (sum, item) => sum + item.quantity,
        0
    );

    const totalPrice = cart.reduce(
        (sum, item) => sum + item.price * item.quantity, 0
    );

    

    return(
     <div className="bucket-container">
        <div className="b-header">
            <div className="item">
            <h2>{totalItems} Item Added</h2>
            </div>
             <div className="menu-icons">
                <span></span>
                <span></span>
                <span></span>
             </div>

        </div>
        {totalItems === 0 ? (
        <div className="empty-state">
            <img src={meal} alt="meal"/>
            <h3>You haven’t added any items in bucket yet</h3>
        </div>):(
            <div>
                {cart.map((item) => (
                    <div className="bucket-items" key={item.id}>
                        <h4>{item.title}</h4>
                        <div className="fix-actions">
                        <p>Rs{item.price * item.quantity}</p>

                        <button
                         className="del-btn"
                         onClick={()=> removeFromCart(item.id)}>X</button>
                         </div>
                    </div>
                ))}
            </div>
        )}
        
        <div className="bottom-wrapper">
        <div className="bottom">
             <div >{totalItems} Item | {totalPrice}</div>
             <button>View Bucket <ArrowForwardIosIcon/></button>
        </div>
        </div>
     </div>
    )
}

export default Bucket
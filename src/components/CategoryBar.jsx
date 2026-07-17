import "./CategoryBar.css";
import Bucket from "./Bucket";
import Card from "./Card";
import menu from "../data/menu";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useState } from "react";

function CategoryBar() {
  const [selectedCategory, setSelectedCategory] = useState(menu[0].category);
  const [selectedItem, setSelectedItem] = useState(null);
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(1);

  const handleCategory = (category) => {
    setSelectedCategory(category);

     const element = document.getElementById(category);
     if (element) {
     element.scrollIntoView({
     behavior: "smooth",
     block: "start"
    });
  }
  }

  const addToCart = (item) => {
    setCart(prev => {
      const existingItem = prev.find(
        cartItem => cartItem.id === item.id
      );

      if(existingItem){
        return prev.map(cartItem=> cartItem.id === item.id ? {
          ...cartItem,
          quantity: cartItem.quantity + 1
        }: cartItem)
      }
      return [
        ...prev,
        {
          ...item,
          quantity:1
        }
      ]
    });
  }

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  }



  const selectedSection = menu.find(
    (section) => section.category === selectedCategory
  )
  return (
    <div className="container">

      {/* BUTTON ROW */}
      <div className="button-row">
        {menu.map((section) => (
          <button
            key={section.category}
            className={`cat-btn ${selectedCategory === section.category ? "active" : ""}`}
            onClick={() => handleCategory(section.category) }
          >
            {section.category}
          </button>
        ))}
      </div>

      {/* MAIN */}
      <div className="main-row">

        {/* LEFT SIDE */}
       <div className="card">

  {menu.map((section) => (

    <div
      key={section.category}
      className="category-section"
      id={section.category}
    >

      <h2 className="category-title">
        {section.category}
      </h2>

      <div className="cards-grid">

        {section.items.map((item) => (

          <Card
            key={item.id}
            title={item.title}
            dealName={item.dealName}
            price={item.price}
            img={item.img}
            onAdd={() => addToCart(item)}
            onOpen={()=> {setSelectedItem(item)
                         setQuantity(1);}

            }
                      />

       

        ))}

        

      </div>

    </div>

  ))}

</div>

        {/* RIGHT SIDE */}
        <div className="bucket">
          <Bucket cart={cart}
                  removeFromCart={removeFromCart}
                  />
        </div>

      </div>

      {selectedItem && (
  <div className="modal">
    <div className="modal-content">

      <button onClick={() => setSelectedItem(null)}
        className="close-btn">X</button>

        <div className="item-detail">
           <img src={selectedItem.img} alt={selectedItem.dealName} />

        <h2>{selectedItem.dealName}</h2>

        <p>{selectedItem.title}</p>

        <h4>Rs. {selectedItem.price}</h4>

        </div>
      
      <div className="quantity">
        <button className="qty-btn"
          onClick={() => {
            if(quantity > 1){
              setQuantity(quantity-1)
            }
          }}
          >
            -
        </button>
        <span className="qty">{quantity}</span>
        <button 
         onClick={()=>{
          setQuantity(quantity+1)
         }}
        >+</button>
      </div>

      <button className="modal-add-btn"
              onClick={()=>{
                for(let i = 0; i < quantity; i++){
                  addToCart(selectedItem);
                }
                setSelectedItem(null);
                setQuantity(1);
               }}
      >
        <span>RS.{selectedItem.price * quantity}</span>
        <b>ADD TO BUCKET</b>
        <span><ArrowForwardIosIcon/></span>
      </button>
   
    </div>


  </div>
   
  )}
</div>
);
}  


export default CategoryBar
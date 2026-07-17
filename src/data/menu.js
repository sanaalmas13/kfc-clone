import burger from "../assets/images/burger.png";
import krunch from "../assets/images/krunch.png";
import chicken from "../assets/images/chicken.png";
import mex from "../assets/images/mex.png";
import wrap from "../assets/images/wrap.png";
import fries from "../assets/images/fries.png";
import nuggets from "../assets/images/nuggets.png";
import combo from "../assets/images/combo.png";
import rice from "../assets/images/rice.png";
import bkt from "../assets/images/bkt.png";
import pepsi from "../assets/images/pepsi.png";
import feast from "../assets/images/feast.png";
import mayo from "../assets/images/mayo.png";
import spicy from "../assets/images/spicy.png";
import garlic from "../assets/images/garlic.png";

const menu = [
  {
    category: "Midnight(start at 12am)",
    items: [
      { id: 1, dealName: "Midnight Deal A", title: "Zinger Burger", price: 650, img: burger },
      { id: 2, dealName: "Midnight Deal B", title: "Krunch Burger", price: 420, img: krunch },
      { id: 3, dealName: "Midnight Deal C", title: "Chicken Piece", price: 300, img: chicken }
    ]
  },

  {
    category: "Let's Mex It Up",
    items: [
      { id: 4, dealName: "Mex Fiesta 1", title: "Mex Burger", price: 700, img: mex },
      { id: 5, dealName: "Mex Fiesta 2", title: "Mex Wrap", price: 550, img: wrap },
      { id: 6, dealName: "Mex Fiesta 3", title: "Loaded Fries", price: 400, img: fries },
      { id: 7, dealName: "Mex Fiesta 4", title: "Nuggets", price: 600, img: nuggets }
    ]
  },

  {
    category: "Everyday Value",
    items: [
      { id: 8, dealName: "Value Deal 1", title: "Zinger Combo", price: 850, img: combo },
      { id: 9, dealName: "Value Deal 2", title: "Chicken Burger Meal", price: 780, img: burger },
      { id: 10, dealName: "Value Deal 3", title: "Rice & Piece", price: 600, img: rice },
      { id: 11, dealName: "Value Deal 4", title: "Mini Bucket", price: 1100, img: bkt },
      { id: 12, dealName: "Value Deal 5", title: "Solo Meal", price: 500, img: bkt }
    ]
  },

  {
    category: "Ala-carte & Combos",
    items: [
      { id: 13, dealName: "Ala Carte 1", title: "Chicken Piece", price: 250, img: chicken },
      { id: 14, dealName: "Combo 1", title: "Burger + Drink", price: 500, img: combo },
      { id: 15, dealName: "Combo 2", title: "Fries + Burger", price: 550, img: burger }
    ]
  },

  {
    category: "Signature-Boxes",
    items: [
      { id: 16, dealName: "Signature Box 1", title: "Family Box", price: 1500, img: krunch },
      { id: 17, dealName: "Signature Box 2", title: "Mega Box", price: 2000, img: mex },
      { id: 18, dealName: "Signature Box 3", title: "Snack Box", price: 1200, img: bkt }
    ]
  },

  {
    category: "Sharing",
    items: [
      { id: 19, dealName: "Sharing Bucket 1", title: "8 Pc Bucket", price: 1800, img: bkt },
      { id: 20, dealName: "Sharing Bucket 2", title: "12 Pc Bucket", price: 2500, img: feast },
      { id: 21, dealName: "Sharing Bucket 3", title: "Family Feast", price: 3000, img: feast }
    ]
  },

  {
    category: "Snacks-&-Beverages",
    items: [
      { id: 22, dealName: "Snack 1", title: "Fries", price: 200, img: fries },
      { id: 23, dealName: "Snack 2", title: "Nuggets", price: 350, img: nuggets },
      { id: 24, dealName: "Drink 1", title: "Pepsi", price: 150, img: pepsi }
    ]
  },

  {
    category: "Condiments",
    items: [
      { id: 25, dealName: "Sauce 1", title: "Mayo Dip", price: 50, img: mayo },
      { id: 26, dealName: "Sauce 2", title: "Spicy Dip", price: 50, img: spicy },
      { id: 27, dealName: "Sauce 3", title: "Garlic Dip", price: 50, img: garlic }
    ]
  }
];

export default menu;
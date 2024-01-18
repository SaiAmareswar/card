import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import FoodItem from './components/Demo'



const items = [
  {
    title: "Butter Chicken",
    desc: "Creamy and rich chicken curry with a tomato-based sauce.",
    img: "butter_chicken",
    price: 12.99,
    rating: 4.5,
    votes: 120
  },
  {
    title: "Biryani",
    desc: "Fragrant rice dish with spices, meat, and/or vegetables.",
    img: "biryani",
    price: 10.99,
    rating: 4.2,
    votes: 95
  },
  {
    title: "Paneer Tikka",
    desc: "Marinated and grilled cottage cheese cubes with spices.",
    img: "paneer_tikka",
    price: 8.99,
    rating: 4.8,
    votes: 150
  },
  {
    title: "Masala Dosa",
    desc: "Thin rice crepe filled with spicy potato mixture.",
    img: "masala_dosa",
    price: 7.99,
    rating: 4.0,
    votes: 80
  },
  {
    title: "Chole Bhature",
    desc: "Fried bread with spicy chickpea curry.",
    img: "chole_bhature",
    price: 9.49,
    rating: 4.3,
    votes: 110
  },
  {
    title: "Samosa",
    desc: "Crispy pastry filled with spiced potatoes and peas.",
    img: "samosa",
    price: 3.99,
    rating: 4.6,
    votes: 130
  },
  {
    title: "Tandoori Chicken",
    desc: "Marinated chicken roasted in a tandoor (clay oven).",
    img: "tandoori_chicken",
    price: 11.99,
    rating: 4.7,
    votes: 140
  },
  {
    title: "Rogan Josh",
    desc: "Spicy and aromatic meat curry from Kashmir.",
    img: "rogan-josh",
    price: 13.99,
    rating: 4.4,
    votes: 125
  },
  {
    title: "Aloo Paratha",
    desc: "Whole wheat bread stuffed with spiced mashed potatoes.",
    img: "aloo_paratha",
    price: 6.99,
    rating: 4.1,
    votes: 90
  },
  {
    title: "Palak Paneer",
    desc: "Cottage cheese cubes in a spinach-based curry.",
    img: "palak-paneer",
    price: 10.49,
    rating: 4.9,
    votes: 160
  },
  {
    title: "Gulab Jamun",
    desc: "Deep-fried dumplings in sugar syrup.",
    img: "gulab_jamun",
    price: 5.49,
    rating: 4.5,
    votes: 115
  },
  {
    title: "Mutton Curry",
    desc: "Spicy and flavorful curry made with mutton (goat meat).",
    img: "mutton_curry",
    price: 14.99,
    rating: 4.2,
    votes: 100
  },
  {
    title: "Pani Puri",
    desc: "Crunchy puris filled with spicy tamarind water and potatoes.",
    img: "pani_puri",
    price: 4.99,
    rating: 4.6,
    votes: 135
  },
  {
    title: "Jalebi",
    desc: "Spiral-shaped deep-fried sweet soaked in sugar syrup.",
    img: "jalebi",
    price: 6.49,
    rating: 4.3,
    votes: 105
  },
  {
    title: "Dal Makhani",
    desc: "Creamy lentils cooked with butter and spices.",
    img: "dal-makhani",
    price: 9.99,
    rating: 4.8,
    votes: 155
  },
  {
    title: "Chicken Tikka Masala",
    desc: "Grilled chicken in a creamy tomato-based curry.",
    img: "chicken-tikka-masala",
    price: 12.49,
    rating: 4.4,
    votes: 125
  },
  {
    title: "Rice Kheer",
    desc: "Sweet rice pudding with cardamom and nuts.",
    img: "rice-kheer",
    price: 5.99,
    rating: 4.7,
    votes: 145
  },
  {
    title: "Aloo Gobi",
    desc: "Cauliflower and potatoes cooked with spices.",
    img: "aloo-gobi",
    price: 8.49,
    rating: 4.0,
    votes: 85
  },
  {
    title: "Fish Curry",
    desc: "Spicy curry made with fish and coconut milk.",
    img: "fish-curry",
    price: 13.49,
    rating: 4.1,
    votes: 95
  },
  {
    title: "Kofta Curry",
    desc: "Vegetable or meatballs in a rich and flavorful curry.",
    img: "kofta-curry",
    price: 11.49,
    rating: 4.6,
    votes: 140
  }
];

// console.log(indianFoodItems[0]);






let name='G S A E'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <div className='title'>
  <h1>react</h1>
  <h2>hello: {Math.random()}</h2>
  <h3>name : {name}</h3>
  <p>hello guru</p>
  <div className='container'>
    {
      items.map((item)=>{
        return <FoodItem  votes={item.votes} rating={item.rating} title={item.title} desc={item.desc} img={item.img}/>
      })
    }
  {/* <Demo title="veg burger" img="burger" desc="hello this is the veg burger"/> */}
  {/* <Demo title="Dosa" img="dosa" desc="this is the dosa desc"/> */}
  {/* <Demo title="Chicken" img="chicken" desc="this is th chicken desc"/> */}
  
  </div>
  </div>
  </>
    
);

reportWebVitals();

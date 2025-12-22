import React from 'react';
import { useState } from 'react';
import './RecipeCard.css';
import Spaghetti from './images/Spaghetti Carbonara1.jpg';
import CaesarSalad from './images/Caesar Salad.jpg';
import BeefTacos from './images/Beef Tacos1.jpg';
import ChickenStirFry from './images/Chicken Stir Fry.jpg';
import ChocolateCake from './images/Chocolate Cake1.jpg';
import FruitSmoothie from './images/Fruit Smoothie1.jpg';

// Sample recipe data
const recipes = [
  {
    id: 1,
    name: "Spaghetti Carbonara",
    image: Spaghetti,
    difficulty: "Medium",
    ingredients: ["Pasta", "Eggs", "Bacon", "Parmesan"],
    prepTime: "20 mins"
  },
  {
    id: 2,
    name: "Caesar Salad",
    image: CaesarSalad,
    difficulty: "Easy",
    ingredients: ["Lettuce", "Parmesan", "Croutons", "Dressing"],
    prepTime: "10 mins"
  },
  {
    id: 3,
    name: "Beef Tacos",
    image: BeefTacos,
    difficulty: "Easy",
    ingredients: ["Beef", "Tortillas", "Lettuce", "Tomato", "Cheese"],
    prepTime: "15 mins"
  },
  {
    id: 4,
    name: "Chicken Stir Fry",
    image: ChickenStirFry,
    difficulty: "Medium",
    ingredients: ["Chicken", "Vegetables", "Soy Sauce", "Rice"],
    prepTime: "25 mins"
  },
  {
    id: 5,
    name: "Chocolate Cake",
    image: ChocolateCake,
    difficulty: "Hard",
    ingredients: ["Flour", "Cocoa", "Eggs", "Butter", "Sugar"],
    prepTime: "45 mins"
  },
  {
    id: 6,
    name: "Fruit Smoothie",
    image: FruitSmoothie,
    difficulty: "Easy",
    ingredients: ["Banana", "Berries", "Yogurt", "Milk"],
    prepTime: "5 mins"
  }
];

// RecipeCardIngredients Component
const RecipeCardIngredients = ({recipe}) => {
  return  (
    recipe.ingredients.map((ingredients, index) => (
      <li key={index}>{ingredients}</li>
    ))
  );
}

// RecipeCard Component - displays a single recipe
function RecipeCard({ recipe }) {
  return (
    <div className='recipeCard' style={{
      border: "3px dashed #ddd",
      borderRadius: "8px",
      padding: "20px",
      textAlign: "center",
      backgroundColor: "#f9f9f9",
      boxShadow: "0 8px 3px rgba(0,0,0,0.4)"
    }}>
      <div style={{ fontSize: "12px", marginBottom: "10px" }}>
        <img 
        style={{
          minWidth: '200px',
          height: '200px',
          objectFit: 'cover',
          borderRadius: '8px'
        }}
        src={recipe.image} alt={`Image of ${recipe.name}`} />
      </div>
      <h3 style={{ margin: "10px 0", color: "#333" }}>
        {recipe.name}
      </h3>
      <p style={{ color: "#666", fontSize: "14px", margin: "8px 0" }}>
        ⏱️ {recipe.prepTime}
      </p>
      <p style={{
        display: "inline-block",
        padding: "5px 12px",
        borderRadius: "20px",
        backgroundColor: 
          recipe.difficulty === "Easy" ? "#d4edda" :
          recipe.difficulty === "Medium" ? "#fff3cd" :
          "#f8d7da",
        color:
          recipe.difficulty === "Easy" ? "#155724" :
          recipe.difficulty === "Medium" ? "#856404" :
          "#721c24",
        fontSize: "12px",
        fontWeight: "bold",
        margin: "10px 0"
      }}>
        {recipe.difficulty}
      </p>
      <div style={{ marginTop: "15px", textAlign: "left" }}>
        <p style={{ fontSize: "12px", fontWeight: "bold", color: "#333" }}>Ingredients:</p>
        <ul style={{ fontSize: "12px", color: "#666", paddingLeft: "20px" }}>
            <RecipeCardIngredients recipe={recipe} />
        </ul>
      </div>
    </div>
  );
}

// Main App Component
export default function RecipeGallery() {
  const [filter, setFilter] = useState('All');  
  const filteredRecipes = filter === 'All' ? recipes : recipes.filter(r => r.difficulty === filter);

  return (
    <div style={{ padding: "40px", maxWidth: "1200px", margin: "0 auto" }}>
      <h1 style={{ textAlign: "center", color: "#333", marginBottom: "30px", fontSize: '34px', fontWeight: 'bolder', fontStyle: 'italic' }}>
        🍳 Recipe Card Gallery
      </h1>

      <div>
        {new Set(['All', ...recipes.map(r => r.difficulty)]).size > 0 &&
          Array.from(new Set(['All', ...recipes.map(r => r.difficulty)])).map((level) => (
            <button
              key={level}
              onClick={() => setFilter(level)}
              style={{
                marginRight: '10px',
                padding: '8px 16px',
                borderRadius: '8px',
                border: filter === level ? '2px solid orange' : '2px solid #ccc',
                backgroundColor: filter === level ? 'orange' : '#f0f0f0',
                color: filter === level ? '#fff' : '#333',
                cursor: 'pointer',
                fontWeight: 'bold'
              }}
            >
              {level}
            </button>
          ))
        }
      </div>

      <div className="recipe-grid">
        {filteredRecipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}
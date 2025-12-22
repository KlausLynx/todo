// import {useState, useEffect} from 'react'

// const Card = ({ title, rating, isCool, actors }) => {
//     const [hasLiked, setHasLiked] = useState(false);
//     const [count, setCount] = useState(0);

//     useEffect(() => {
//       console.log(`${title} has been liked: ${hasLiked}`);
//     },[hasLiked, title]);
    

//   return (
//     <div className="card" onClick={() => setCount(count + 1)}>
//       <h2>{title} <br/> {count} {rating} {isCool} {actors?.[0]?.name}</h2>
//       <button onClick={() => setHasLiked(!hasLiked)}>
//         {hasLiked ? ' ❤️' : ' 🤍'}
//       </button>
//     </div>
//   )
// }

 
// const App = () => {

//   return (
//     <h2>Functional Arrow Component</h2>
//     <div className="card-container">
//       <Card title="Star Wars" rating={5} isCool={true} actors={[{name: 'Actors'}]}/>
//       <Card title="Avatar" rating={4} isCool={true} actors={[{name: 'Anag'}]}/>
//       <Card title="Inception" rating={5} isCool={false} actors={[{name: 'Leonardo DiCaprio'}]}/>
//     </div>
    
//   )
// }

// export default App
import { useState, useEffect } from "react";
import profPic from './assets/Untitled-1.png';
import profPic2 from './assets/c86a7ae8dd74930feb01715833b9ab84.jpg';

const Card = ({ name, age, occupation, img }) => {
  const [likes, setLikes] = useState(false);
  const [follows, setFollows] = useState(false);
  const [count, setCount] = useState(0);

  // useEffect for count
  useEffect(() => {
    if (count > 0) {
      console.log(`${name} card clicked ${count} times`);
    }
  }, [name, count]);

  // useEffect for likes
  useEffect(() => {
    console.log(`${name} likes: ${likes}`);
  }, [name, likes]);

  // useEffect for follows
  useEffect(() => {
    console.log(`${name} follows: ${follows}`);
  }, [name, follows]);

  return (
    <div className="card" onClick={() => setCount(count + 1)}>
      <img src={img} alt={`${name}'s picture`} />
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Occupation: {occupation}</p>

      <button
        onClick={(e) => {
          e.stopPropagation(); 
          setLikes(!likes);
        }}
      >
        {likes ? "❤️ Liked" : "🤍 Like"}
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          setFollows(!follows);
        }}
      >
        {follows ? "UnFollow" : "Follow"}
      </button>

      <p>Card click count: {count}</p>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <h1 class="text-3xl font-bold underline">
        Hello, React!
      </h1>
      <p>Welcome to your first React application.</p>
      <div className="card-container">
        <Card name="Oqzari Sallah" age={30} occupation="Software Engineer" img={profPic} />
        <Card name="Jane Smith" age={25} occupation="Graphic Designer" img={profPic2} />
      </div>
    </div>
  );
}

export default App;
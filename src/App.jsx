import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Review from './components/rating'
import Ratinglist from './components/Ratinglist'
function App() {


  const [ratings, setRatings] = useState([]);

  const addForm = (form) => {
      setRatings([...ratings, form]); // Adds the new review to the list
  };

  return (
      <div>
        
          <Review noOfStar={5} addForm={addForm} />
          <Ratinglist ratings={ratings} />
      </div>
  );
  
}
  

export default App

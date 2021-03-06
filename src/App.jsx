import './App.css';
import {useState} from "react";
import Axios from "axios"; 
import Recipetile from './recipetile/Recipetile';
import "./App.css";

function App() {
  const YOUR_APP_ID = "ac0ccfac";
  const YOUR_APP_KEY = "1e677a831548cef9b1632505e3b4f49b";
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("");
  const [healthLabel, setHealthLabel] = useState("vegetarian")
  
  const url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=${healthLabel}`;

  const getRecipeInfo = async () =>{
    var result = await Axios.get(url);
    setRecipes(result.data.hits);
    console.log(result.data.hits);
  }

  const onSubmit = (e) => {
    e.preventDefault();  // this will prevent page from reloading
    getRecipeInfo(); // this get data from api data   
  }
  
  const search_value = (e) => {
    setQuery(e.target.value);
  }
 // console.log(query)
 
  return (
    <div className="app">
      <h1 onClick={getRecipeInfo}>
        Food Recipe Generator <span> 🐟 🍅 🥕</span>
      </h1>
      <form className="app_searchForm" action=''>
        <input type="text" 
          placeholder="Enter the ingredient(s) e.g Onion, egg, cabbage etc"  
          className="app_input app_input_sm" 
          autoComplete='off'
          onChange={search_value}
          value={query}
        />
        <select className="app_healthLabels app_input_sm">
          <option
            value="vegan"
            onClick={() => {
              setHealthLabel("vegan");
            }}
          >
            vegan
          </option>
          <option
            value="vegetarian"
            onClick={() => {
              setHealthLabel("vegetarian");
            }}
          >
            vegetarian
          </option>
          <option
            value="low-sugar"
            onClick={() => {
              setHealthLabel("low-sugar");
            }}
          >
            low-sugar
          </option>
          <option
            value="dairy-free"
            onClick={() => {
              setHealthLabel("dairy-free");
            }}
          >
            dairy-free
          </option>
          <option
            value=" immuno-supportive "
            onClick={() => {
              setHealthLabel(" immuno-supportive ");
            }}
          >
            immuno-supportive
          </option>
          <option
            value="wheat-free"
            onClick={() => {
              setHealthLabel("wheat-free");
            }}
          >
            wheat-free
          </option>
          <option
            value="Wheat-free"
            onClick={() => {
              setHealthLabel("Wheat-free");
            }}
          >
            Wheat-free
          </option>
        </select>
        
        
        <input type="submit" 
          value="Get Recipe" 
          className="app_submit app_input_sm"
          onClick={onSubmit}
        />
      </form>
      <div className='App_recipes'>
        {recipes.map((recipe) => {
          return < Recipetile recipe={recipe} />;
        })}
      </div>
      <footer className='footer'>
        <small>&copy; 2022. lukupay@gmail.com</small>
      </footer>
    </div>

  );
}

export default App;

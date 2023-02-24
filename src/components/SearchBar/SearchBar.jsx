import { useState } from "react";
import style from "./SearchBar.module.css";

export default function SearchBar(props) {

const[character, setCharacter] = useState("");

const handleChange= evento => {
   const{value}= evento.target;
   setCharacter(value);

}

   return (
      <div className={style.container}>
         <input 
         type="search"
         name="search"
         id="search"
         onChange={handleChange}
         />
      <button onClick={() =>props.onSearch(character)}>Agregar</button>
      </div>
   );
}

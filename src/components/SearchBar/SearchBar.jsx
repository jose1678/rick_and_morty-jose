import style from "./SearchBar.module.css";

export default function SearchBar(props) {
   return (
      <div className={style.container}>
         <input 
         type="search"
         name="search"
         id="search"
         />
      <button onClick={props.onSearch}>Agregar</button>
      </div>
   );
}
